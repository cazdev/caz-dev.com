import './Field.css'

/* Labelled text input. Pass `multiline` for a textarea. */
export default function Field({ id, label, multiline = false, ...inputProps }) {
  const Control = multiline ? 'textarea' : 'input'

  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>{label}</label>
      <Control id={id} className="field__control" {...inputProps} />
    </div>
  )
}
