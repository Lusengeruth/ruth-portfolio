import { personal } from '@/data/portfolio'
import { useTypingAnimation } from '@/hooks'
import { handleNavClick } from '@/utils/scroll'

export default function Hero() {
  const displayed = useTypingAnimation(personal.taglines)

  return (
    <section id="home" className="min-h-screen flex items-center py-20 relative">

      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute h-full w-full bg-gradient-to-br from-primary/10 to-secondary/5" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/20 -ml-20 -mb-20 blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-secondary/10 -mr-48 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="flex flex-col md:flex-row items-center">

          {/* Text */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="text-primary">{personal.name}</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-6 min-h-[2.5rem]">
              {displayed}
              <span className="animate-pulse text-primary ml-0.5">|</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
              I build responsive web applications, mobile apps, and analyze data
              to create effective solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8
                           rounded-lg transition duration-300 inline-flex items-center"
              >
                View Projects <i className="fas fa-arrow-right ml-2" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="bg-transparent hover:bg-primary/10 border-2 border-primary text-primary
                           font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center"
              >
                Contact Me <i className="fas fa-envelope ml-2" />
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                              border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src="/photo.jpeg"
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-full p-5 shadow-lg">
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                  <i className="fas fa-laptop-code text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} aria-label="Scroll down">
            <i className="fas fa-chevron-down text-3xl text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}
