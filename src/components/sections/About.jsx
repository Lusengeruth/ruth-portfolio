import { personal } from '@/data/portfolio'
import { handleNavClick } from '@/utils/scroll'
import SocialIcon from '@/components/ui/SocialIcon'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mb-10 md:mb-0 md:pr-12">
            {personal.bio.map((paragraph, i) => (
              <p key={i} className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Hire Me
              </a>
              <a
                href={personal.cvUrl}
                download
                className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700
                           border border-gray-300 dark:border-gray-600
                           text-gray-800 dark:text-gray-200
                           font-semibold py-2 px-6 rounded-lg transition duration-300
                           inline-flex items-center gap-2"
              >
                <i className="fas fa-download" /> Download CV
              </a>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <i className="fas fa-user-circle text-primary" /> Personal Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <i className="fas fa-map-marker-alt text-primary mt-1" />
                  <div>
                    <span className="font-medium block">Location</span>
                    <span className="text-gray-600 dark:text-gray-300">{personal.location}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-phone text-primary mt-1" />
                  <div>
                    <span className="font-medium block">Phone</span>
                    <a href={`tel:${personal.phone.replace(/\s/g, '')}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary transition">
                      {personal.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fab fa-linkedin text-primary mt-1" />
                  <div>
                    <span className="font-medium block">LinkedIn</span>
                    <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                      className="text-primary hover:underline">
                      {personal.linkedinLabel}
                    </a>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4 flex items-center gap-2">
                <i className="fas fa-globe text-primary" /> Social Media
              </h3>
              <div className="flex gap-3">
                <SocialIcon href={personal.social.github}    icon="fa-github" />
                <SocialIcon href={personal.social.linkedin}  icon="fa-linkedin-in" />
                <SocialIcon href={personal.social.facebook}  icon="fa-facebook-f" />
                <SocialIcon href={personal.social.instagram} icon="fa-instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
