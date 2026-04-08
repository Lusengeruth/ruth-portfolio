import { useState, useEffect, useRef } from 'react'

export function useTypingAnimation(texts, {
  typeSpeed   = 100,
  deleteSpeed = 50,
  pauseEnd    = 1000,
  pauseStart  = 500,
} = {}) {
  const [displayed, setDisplayed] = useState('')
  const state = useRef({ textIndex: 0, charIndex: 0, isDeleting: false })

  useEffect(() => {
    let timeout

    function tick() {
      const { textIndex, charIndex, isDeleting } = state.current
      const current = texts[textIndex]

      if (isDeleting) {
        setDisplayed(current.substring(0, charIndex - 1))
        state.current.charIndex--

        if (state.current.charIndex === 0) {
          state.current.isDeleting = false
          state.current.textIndex  = (textIndex + 1) % texts.length
          timeout = setTimeout(tick, pauseStart)
        } else {
          timeout = setTimeout(tick, deleteSpeed)
        }
      } else {
        setDisplayed(current.substring(0, charIndex + 1))
        state.current.charIndex++

        if (state.current.charIndex === current.length) {
          state.current.isDeleting = true
          timeout = setTimeout(tick, pauseEnd)
        } else {
          timeout = setTimeout(tick, typeSpeed)
        }
      }
    }

    timeout = setTimeout(tick, 1000)
    return () => clearTimeout(timeout)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return displayed
}
