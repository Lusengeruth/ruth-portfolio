export default function SocialIcon({ href, icon, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-10 h-10 rounded-full flex items-center justify-center transition duration-300
        bg-gray-200 dark:bg-gray-600 hover:bg-primary hover:text-white dark:hover:bg-primary
        ${className}`}
    >
      <i className={`fab ${icon}`} />
    </a>
  )
}
