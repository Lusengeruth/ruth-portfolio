// ─── PERSONAL INFO ────────────────────────────────────────────
export const personal = {
  name:          'Ruth Lusenge',
  initials:      'RL',
  taglines:      ['Frontend Developer', 'Mobile App Developer', 'Data Analyst'],
  location:      'Democratic Republic of Congo',
  phone:         '+243 977 721 625',
  email:         'lusengeruth26@gmail.com',
  linkedin:      'https://www.linkedin.com/in/ruth-lusenge',
  linkedinLabel: 'Ruth Lusenge',
  cvUrl:         '/ruth-lusenge-cv.pdf',
  bio: [
    "I'm a passionate developer from the Democratic Republic of Congo, specializing in creating beautiful, functional and responsive applications. With expertise in frontend development, mobile app creation, and data analysis, I bring a well-rounded skill set to every project.",
    "My approach combines technical precision with creative problem-solving to deliver exceptional user experiences. I'm constantly learning new technologies and methods to stay at the forefront of digital innovation.",
  ],
  social: {
    github:    'https://github.com/Lusengeruth',
    linkedin:  'https://www.linkedin.com/in/ruth-lusenge',
    facebook:  'https://www.facebook.com/share/1DfocgrfKy/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/ruth__lus?igsh=MWtwZWtlZ2M1NWl3bg%3D%3D&utm_source=qr',
  },
}

// ─── NAV LINKS ────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home',     href: 'home' },
  { label: 'About',    href: 'about' },
  { label: 'Skills',   href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact',  href: 'contact' },
]

// ─── SKILLS ───────────────────────────────────────────────────
export const skills = [
  {
    id:          'frontend',
    title:       'Frontend Development',
    icon:        'fa-code',
    color:       'blue',
    description: 'Building responsive and interactive web applications with modern technologies.',
    items: [
      { name: 'HTML5 & CSS3',  level: 95 },
      { name: 'JavaScript',    level: 90 },
      { name: 'React',         level: 85 },
    ],
  },
  {
    id:          'mobile',
    title:       'Mobile Development',
    icon:        'fa-mobile-alt',
    color:       'purple',
    description: 'Creating cross-platform mobile applications with advanced user interfaces.',
    items: [
      { name: 'Flutter',      level: 80 },
      { name: 'Dart',         level: 85 },
      { name: 'UI/UX Design', level: 75 },
    ],
  },
  {
    id:          'data',
    title:       'Data Analysis',
    icon:        'fa-chart-line',
    color:       'green',
    description: 'Processing and visualizing data to derive meaningful insights.',
    items: [
      { name: 'Python',             level: 90 },
      { name: 'Data Visualization', level: 80 },
      { name: 'Machine Learning',   level: 70 },
    ],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────
export const projects = [
  {
    id:          1,
    category:    'frontend',
    title:       'Hatua Collection',
    description: 'A full-stack e-commerce platform for fashion with a Node.js backend and real-time product management.',
    tags:        ['React', 'Vite', 'Node.js', 'REST API'],
    image:       '/images/hatua-collection.png',
    url:         'https://hatua-collection.vercel.app/',
  },
  {
    id:          2,
    category:    'frontend',
    title:       'Image Search App',
    description: 'A responsive image search application powered by an external API, built with React and Vite.',
    tags:        ['React', 'Vite', 'API', 'HMR'],
    image:       '/images/image-search.png',
    url:         'https://image-search-app-nine-sigma.vercel.app/',
  },
  {
    id:          3,
    category:    'frontend',
    title:       'Analytics Dashboard',
    description: 'An interactive data analytics dashboard with dynamic charts and KPI tracking using Chart.js.',
    tags:        ['React 18', 'Chart.js', 'Vite', 'CSS'],
    image:       '/images/analytics-dashboard.png',
    url:         'https://analytics-dashboard-mu-seven.vercel.app/',
  },
  {
    id:          4,
    category:    'frontend',
    title:       'Weather App',
    description: 'A real-time weather application with location-based forecasts and clean UI, built with React and Vite.',
    tags:        ['React', 'Vite', 'Weather API'],
    image:       '/images/weather-app.png',
    url:         'https://weather-app-dun-three-80.vercel.app/',
  },
  {
    id:          5,
    category:    'frontend',
    title:       'Task Manager',
    description: 'A clean and intuitive task management app with CRUD operations, built with vanilla JavaScript.',
    tags:        ['JavaScript', 'CSS', 'HTML'],
    image:       '/images/task-manager.png',
    url:         'https://task-manager-topaz-pi-74.vercel.app/',
  },
  {
    id:          6,
    category:    'frontend',
    title:       'Dev Portfolio v1',
    description: 'My first portfolio version — a responsive developer portfolio with smooth animations.',
    tags:        ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    image:       '/images/portfolio-v1.png',
    url:         'https://ruth-dev-portfolio.vercel.app/',
  },
]

// ─── PROJECT FILTERS ──────────────────────────────────────────
export const projectFilters = [
  { label: 'All Projects',  value: 'all' },
  { label: 'Frontend',      value: 'frontend' },
  { label: 'Mobile Apps',   value: 'mobile' },
  { label: 'Data Analysis', value: 'data' },
]
