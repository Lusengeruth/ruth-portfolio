import { useState, useEffect } from 'react'

export function useDarkMode() {
  const [dark, setDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  // Apply class to <html>
  useEffect(() => {
    dark
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [dark])

  // Sync with OS preference changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => setDark(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggle = () => setDark((d) => !d)

  return [dark, toggle]
}
