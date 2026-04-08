import { useState } from 'react'
import { projects, projectFilters } from '@/data/portfolio'
import Badge from '@/components/ui/Badge'

function ProjectCard({ project }) {
  return (
    <div className="project-card bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md">
      <div className="h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="mb-3">
          <Badge category={project.category} />
        </div>

        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 dark:bg-gray-600 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition"
        >
          View Project <i className="fas fa-arrow-right" />
        </a>
      </div>
    </div>
  )
}

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

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
