import { useState } from 'react'
import Section from './ui/Section'
import Field from './ui/Field'
import Button from './ui/Button'
import './Contact.css'

const emptyForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  const sending = status === 'sending'

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('sent')
        setForm(emptyForm)
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data.error || 'The message could not be sent. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Could not reach the server. Check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <Section
      id="contact"
      title="Contact"
      intro="Working on something I could help with? Send a message and I'll reply by email."
    >
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
          <Field id="contact-name" label="Name" name="name" autoComplete="name"
            value={form.name} onChange={handleChange} required disabled={sending} />
          <Field id="contact-email" label="Email" name="email" type="email" autoComplete="email"
            value={form.email} onChange={handleChange} required disabled={sending} />
        </div>
        <Field id="contact-message" label="Message" name="message" multiline rows={6} maxLength={5000}
          value={form.message} onChange={handleChange} required disabled={sending} />

        <div className="contact-form__actions">
          <Button type="submit" disabled={sending || status === 'sent'}>
            {sending ? 'Sending…' : 'Send message'}
          </Button>
          {status === 'sent' && (
            <p className="contact-form__status" role="status">Thanks, your message has been sent.</p>
          )}
          {status === 'error' && (
            <p className="contact-form__status contact-form__status--error" role="alert">{errorMsg}</p>
          )}
        </div>
      </form>
    </Section>
  )
}
