import { skills } from '@/data/portfolio'
import SkillBar from '@/components/ui/SkillBar'

const iconBg = {
  blue:   'bg-blue-50   dark:bg-blue-900/30',
  purple: 'bg-purple-50 dark:bg-purple-900/30',
  green:  'bg-green-50  dark:bg-green-900/30',
}

const iconColor = {
  blue:   'text-blue-500',
  purple: 'text-purple-500',
  green:  'text-green-500',
}

function SkillCard({ skill }) {
  return (
    <div className="skill-card bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition duration-300">
      <div className={`skill-icon w-20 h-20 ${iconBg[skill.color]} rounded-full
                       flex items-center justify-center mb-6 mx-auto md:mx-0`}>
        <i className={`fas ${skill.icon} text-3xl ${iconColor[skill.color]}`} />
      </div>
      <h3 className="text-xl font-bold mb-4 text-center md:text-left">{skill.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center md:text-left text-sm leading-relaxed">
        {skill.description}
      </p>
      <div className="space-y-3">
        {skill.items.map((item) => (
          <SkillBar key={item.name} name={item.name} level={item.level} color={skill.color} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => <SkillCard key={skill.id} skill={skill} />)}
        </div>
      </div>
    </section>
  )
}
