// ─── PERSONAL INFO ────────────────────────────────────────────
export const personal = {
  name:          'Ruth Lusenge',
  initials:      'RL',
  taglines:      ['Frontend Developer', 'Fullstack Developer', 'Data Analyst'],
  location:      'Democratic Republic of Congo',
  phone:         '+243 977 721 625',
  email:         'lusengeruth26@gmail.com',
  linkedin:      'https://www.linkedin.com/in/ruth-lusenge',
  linkedinLabel: 'Ruth Lusenge',
  cvUrl:         '/ruth-lusenge-cv.pdf',
  bio: [
    "I'm a passionate developer from the Democratic Republic of Congo, specializing in creating beautiful, functional and responsive applications. With expertise in frontend and fullstack development, REST APIs, and data analysis, I bring a well-rounded skill set to every project.",
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
    id: 'frontend', title: 'Frontend Development', icon: 'fa-laptop-code', color: 'blue',
    description: 'Crafting responsive, accessible and visually polished web interfaces with modern frameworks.',
    items: [
      { name: 'HTML5 & CSS3',  level: 95 },
      { name: 'JavaScript',    level: 90 },
      { name: 'React & Vite',  level: 85 },
      { name: 'Tailwind CSS',  level: 85 },
    ],
  },
  {
    id: 'fullstack', title: 'Fullstack Development', icon: 'fa-server', color: 'purple',
    description: 'Building end-to-end web applications with robust backends, REST APIs, and database management.',
    items: [
      { name: 'Laravel / PHP', level: 78 },
      { name: 'Node.js',       level: 75 },
      { name: 'MySQL / MongoDB', level: 80 },
      { name: 'REST APIs',     level: 85 },
    ],
  },
  {
    id: 'data', title: 'Data Analysis', icon: 'fa-chart-line', color: 'green',
    description: 'Processing and visualizing data to derive meaningful insights and build intelligent models.',
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
    id: 1, category: 'fullstack',
    title:       'Pharmacie de l\'Espoir 💊',
    description: 'Fullstack pharmacy management system for a real pharmacy in Goma, DRC. Features medicine inventory with low-stock alerts, automatic PDF invoices with 16% DRC VAT, Excel export, a REST API for partner clinics (CBCA, Heal Africa), and role-based access for admin, pharmacist, and cashier.',
    tags:        ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'REST API', 'DomPDF'],
    images:      [
      '/images/pharmacie-1.png',
      '/images/pharmacie-2.png',
      '/images/pharmacie-3.png',
    ],
    url:    null,
    github: 'https://github.com/Lusengeruth/pharmacie-espoir',
  },
  {
    id: 2, category: 'fullstack',
    title:       'Hatua Collection',
    description: 'Fullstack e-commerce platform for a fashion brand. Built with React on the frontend and a Node.js REST API backend deployed on Render, featuring product catalog, cart management, and real-time inventory.',
    tags:        ['React', 'Vite', 'Node.js', 'REST API', 'MongoDB'],
    images:      ['/images/hatua-collection.png'],
    url:    'https://hatua-collection.vercel.app/',
    github: null,
  },
  {
    id: 3, category: 'frontend',
    title:       'Analytics Dashboard',
    description: 'Interactive frontend dashboard with dynamic KPI cards, bar charts, and line charts using Chart.js and React 18.',
    tags:        ['React 18', 'Chart.js', 'Vite', 'CSS'],
    images:      ['/images/analytics-dashboard.png'],
    url:    'https://analytics-dashboard-mu-seven.vercel.app/',
    github: null,
  },
  {
    id: 4, category: 'frontend',
    title:       'Weather App',
    description: 'Frontend weather application with real-time location-based forecasts, dynamic backgrounds, and a clean responsive UI.',
    tags:        ['React', 'Vite', 'Weather API'],
    images:      ['/images/weather-app.png'],
    url:    'https://weather-app-dun-three-80.vercel.app/',
    github: null,
  },
  {
    id: 5, category: 'frontend',
    title:       'Image Search App',
    description: 'Frontend image search tool consuming the Unsplash API with paginated results and keyword filtering.',
    tags:        ['React', 'Vite', 'Unsplash API'],
    images:      ['/images/image-search.png'],
    url:    'https://image-search-app-nine-sigma.vercel.app/',
    github: null,
  },
  {
    id: 6, category: 'frontend',
    title:       'Task Manager',
    description: 'Frontend task management app with full CRUD, priority filtering, and local storage persistence — built in vanilla JavaScript.',
    tags:        ['JavaScript', 'CSS', 'HTML'],
    images:      ['/images/task-manager.png'],
    url:    'https://task-manager-topaz-pi-74.vercel.app/',
    github: null,
  },
  {
    id: 7, category: 'frontend',
    title:       'Dev Portfolio v1',
    description: 'My first developer portfolio — responsive, animated, with dark mode support.',
    tags:        ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    images:      ['/images/portfolio-v1.png'],
    url:    'https://ruth-dev-portfolio.vercel.app/',
    github: null,
  },
]

// ─── PROJECT FILTERS ──────────────────────────────────────────
export const projectFilters = [
  { label: 'All Projects',  value: 'all' },
  { label: 'Fullstack',     value: 'fullstack' },
  { label: 'Frontend',      value: 'frontend' },
  { label: 'Data Analysis', value: 'data' },
]
