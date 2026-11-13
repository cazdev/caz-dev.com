import { useEffect, useRef } from 'react'
import './VariableType.css'

const RADIUS = 160
const REST = { weight: 600, stretch: 100 }
const PRESSED = { weight: 160, stretch: 76 }

/*
 * Text whose letters settle into weight on load, then thin out and condense
 * under the pointer. Relies on the variable font's wght and wdth axes.
 */
export default function VariableType({ as: Tag = 'span', text, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reducedMotion) return

    const letters = [...ref.current.querySelectorAll('.variable-type__letter')]
    let frame = 0
    let pointer = null

    function update() {
      frame = 0
      for (const letter of letters) {
        const box = letter.getBoundingClientRect()
        const distance = pointer
          ? Math.hypot(pointer.x - (box.left + box.width / 2), pointer.y - (box.top + box.height / 2))
          : Infinity
        const pull = Math.max(0, 1 - distance / RADIUS) ** 2

        if (pull === 0) {
          letter.style.fontWeight = ''
          letter.style.fontStretch = ''
          continue
        }
        letter.style.fontWeight = REST.weight - (REST.weight - PRESSED.weight) * pull
        letter.style.fontStretch = `${REST.stretch - (REST.stretch - PRESSED.stretch) * pull}%`
      }
    }

    function schedule(nextPointer) {
      pointer = nextPointer
      if (!frame) frame = requestAnimationFrame(update)
    }

    const onMove = (e) => schedule({ x: e.clientX, y: e.clientY })
    const onLeave = () => schedule(null)

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <Tag ref={ref} className={`variable-type ${className}`.trim()} aria-label={text}>
      {[...text].map((char, i) => (
        <span key={i} className="variable-type__letter" style={{ '--i': i }} aria-hidden="true">
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </Tag>
  )
}
