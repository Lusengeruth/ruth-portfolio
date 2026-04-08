const NAV_HEIGHT = 64

/**
 * Smoothly scroll to a section by its id.
 * @param {string} id  - the element's id (without #)
 */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT
  window.scrollTo({ top, behavior: 'smooth' })
}

/**
 * onClick handler for anchor tags pointing to sections.
 * @param {Event}  e
 * @param {string} id - section id
 */
export function handleNavClick(e, id) {
  e.preventDefault()
  scrollToSection(id)
}
