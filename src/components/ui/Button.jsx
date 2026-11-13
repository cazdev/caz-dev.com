import './Button.css'

export default function Button({ className = '', ...props }) {
  return <button className={`button ${className}`.trim()} {...props} />
}
