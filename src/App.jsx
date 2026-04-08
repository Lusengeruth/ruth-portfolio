import { useDarkMode }      from '@/hooks'
import { useActiveSection } from '@/hooks'
import { navLinks }         from '@/data/portfolio'

import Navbar   from '@/components/layout/Navbar'
import Footer   from '@/components/layout/Footer'
import Hero     from '@/components/sections/Hero'
import About    from '@/components/sections/About'
import Skills   from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact  from '@/components/sections/Contact'

const SECTION_IDS = navLinks.map((l) => l.href)

export default function App() {
  const [dark, toggleDark] = useDarkMode()
  const activeSection      = useActiveSection(SECTION_IDS)

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Navbar
        dark={dark}
        toggleDark={toggleDark}
        activeSection={activeSection}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
