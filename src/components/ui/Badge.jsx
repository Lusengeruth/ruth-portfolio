const variants = {
  frontend: 'bg-blue-100   dark:bg-blue-900   text-blue-500   dark:text-blue-300',
  mobile:   'bg-purple-100 dark:bg-purple-900 text-purple-500 dark:text-purple-300',
  data:     'bg-green-100  dark:bg-green-900  text-green-500  dark:text-green-300',
}

const labels = {
  frontend: 'Frontend',
  mobile:   'Mobile',
  data:     'Data Analysis',
}

export default function Badge({ category }) {
  return (
    <span className={`inline-block text-xs font-semibold rounded-full px-3 py-1 ${variants[category]}`}>
      {labels[category]}
    </span>
  )
}
