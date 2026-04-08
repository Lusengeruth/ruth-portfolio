import { useState } from 'react'
import { navLinks, personal } from '@/data/portfolio'
import { handleNavClick } from '@/utils/scroll'

export default function Navbar({ dark, toggleDark, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu  = () => { setMenuOpen(true);  document.body.style.overflow = 'hidden' }
  const closeMenu = () => { setMenuOpen(false); document.body.style.overflow = 'auto' }

  const handleClick = (e, id) => {
    handleNavClick(e, id)
    closeMenu()
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-blur shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href="#home" onClick={(e) => handleClick(e, 'home')}
            className="text-xl font-bold text-primary">
            {personal.initials}
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={`#${href}`}
                onClick={(e) => handleClick(e, href)}
                className={`transition duration-300 hover:text-primary ${
                  activeSection === href ? 'text-primary font-semibold' : ''
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center
                         hover:bg-primary hover:text-white transition duration-300"
            >
              <i className={`fas ${dark ? 'fa-sun' : 'fa-moon'}`} />
            </button>

            {/* Hamburger */}
            <button
              onClick={openMenu}
              aria-label="Open menu"
              className="md:hidden focus:outline-none"
            >
              <i className="fas fa-bars text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900/95 z-50 flex flex-col items-center justify-center gap-8 text-xl">
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-white"
          >
            <i className="fas fa-times text-2xl" />
          </button>

          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={`#${href}`}
              onClick={(e) => handleClick(e, href)}
              className="text-white hover:text-primary transition duration-300 py-2"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
