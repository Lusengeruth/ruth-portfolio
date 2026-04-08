const barColors = {
  blue:   'bg-blue-500',
  purple: 'bg-purple-500',
  green:  'bg-green-500',
}

export default function SkillBar({ name, level, color }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-700 dark:text-gray-300 text-sm">{name}</span>
      <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className={`${barColors[color]} h-2.5 rounded-full transition-all duration-700`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}
