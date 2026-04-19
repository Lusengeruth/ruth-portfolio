import { navLinks, personal } from '@/data/portfolio'
import { handleNavClick } from '@/utils/scroll'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">

          <div className="mb-4 md:mb-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-2xl font-bold text-primary"
            >
              {personal.name}
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Frontend & Fullstack Developer · Data Analyst
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={`#${href}`}
                onClick={(e) => handleNavClick(e, href)}
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition duration-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {year} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
