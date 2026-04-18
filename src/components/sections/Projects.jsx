import { useState } from 'react'
import { projects, projectFilters } from '@/data/portfolio'
import Badge from '@/components/ui/Badge'

// ── Image Carousel ─────────────────────────────────────────────
function ImageCarousel({ images, title }) {
  const [current, setCurrent] = useState(0)

  if (!images || images.length === 0) return null

  const prev = (e) => {
    e.stopPropagation()
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }
  const next = (e) => {
    e.stopPropagation()
    setCurrent((c) => (c + 1) % images.length)
  }

  return (
    <div className="relative h-52 overflow-hidden group">
      <img
        src={images[current]}
        alt={`${title} screenshot ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Arrows — only show if multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2
                       w-8 h-8 rounded-full bg-black/50 text-white
                       flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-opacity duration-200
                       hover:bg-black/70"
            aria-label="Previous image"
          >
            <i className="fas fa-chevron-left text-xs" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2
                       w-8 h-8 rounded-full bg-black/50 text-white
                       flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-opacity duration-200
                       hover:bg-black/70"
            aria-label="Next image"
          >
            <i className="fas fa-chevron-right text-xs" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ── Project Card ───────────────────────────────────────────────
function ProjectCard({ project }) {
  return (
    <div className="project-card bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md flex flex-col">
      <ImageCarousel images={project.images} title={project.title} />

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <Badge category={project.category} />
        </div>

        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-200 dark:bg-gray-600 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition text-sm"
            >
              <i className="fas fa-external-link-alt" /> Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary font-semibold inline-flex items-center gap-2 transition text-sm"
            >
              <i className="fab fa-github" /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Section ────────────────────────────────────────────────────
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
          My Projects
        </h2>

        {/* Filter buttons */}
        <div className="mb-12 flex flex-wrap justify-center md:justify-start gap-3">
          {projectFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`py-2 px-6 rounded-full transition duration-300 ${
                activeFilter === filter.value
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
