import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import './ContactSection.css'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
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
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="ContactSection">
      <div className="contact__inner">
        <div className="section-header">
          <span className="section-tag">Get in touch</span>
          <h2 className="section-title">
            Say <span className="grad-text">Hello</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to chat? Send me a message and I'll get back to you.
          </p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="contact-name" className="contact__label">Name</label>
              <input
                id="contact-name"
                className="contact__input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-email" className="contact__label">Email</label>
              <input
                id="contact-email"
                className="contact__input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                disabled={status === 'sending'}
              />
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="contact-message" className="contact__label">Message</label>
            <textarea
              id="contact-message"
              className="contact__input contact__textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              rows={6}
              required
              disabled={status === 'sending'}
            />
          </div>

          {status === 'error' && (
            <div className="contact__alert contact__alert--error">
              <FontAwesomeIcon icon={faCircleExclamation} />
              {errorMsg}
            </div>
          )}

          {status === 'success' && (
            <div className="contact__alert contact__alert--success">
              <FontAwesomeIcon icon={faCircleCheck} />
              Message sent! I'll be in touch soon.
            </div>
          )}

          <button
            className="contact__submit"
            type="submit"
            disabled={status === 'sending' || status === 'success'}
          >
            {status === 'sending' ? (
              <>Sending&hellip;</>
            ) : (
              <>
                Send Message
                <FontAwesomeIcon icon={faPaperPlane} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
