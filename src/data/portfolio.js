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
    id: 'frontend', title: 'Frontend Development', icon: 'fa-code', color: 'blue',
    description: 'Building responsive and interactive web applications with modern technologies.',
    items: [
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'JavaScript',   level: 90 },
      { name: 'React',        level: 85 },
    ],
  },
  {
    id: 'mobile', title: 'Mobile Development', icon: 'fa-mobile-alt', color: 'purple',
    description: 'Creating cross-platform mobile applications with advanced user interfaces.',
    items: [
      { name: 'Flutter',      level: 80 },
      { name: 'Dart',         level: 85 },
      { name: 'UI/UX Design', level: 75 },
    ],
  },
  {
    id: 'data', title: 'Data Analysis', icon: 'fa-chart-line', color: 'green',
    description: 'Processing and visualizing data to derive meaningful insights.',
    items: [
      { name: 'Python',             level: 90 },
      { name: 'Data Visualization', level: 80 },
      { name: 'Machine Learning',   level: 70 },
    ],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────
// images: array — first image is the cover, extras shown in carousel on hover
export const projects = [
  {
    id: 1, category: 'frontend',
    title:       'Hatua Collection',
    description: 'Full-stack e-commerce platform for fashion with a Node.js backend and real-time product management.',
    tags:        ['React', 'Vite', 'Node.js', 'REST API'],
    images:      ['/images/hatua-collection.png'],
    url:         'https://hatua-collection.vercel.app/',
    github:      null,
  },
  {
    id: 2, category: 'frontend',
    title:       'Image Search App',
    description: 'Responsive image search application powered by an external API, built with React and Vite.',
    tags:        ['React', 'Vite', 'API'],
    images:      ['/images/image-search.png'],
    url:         'https://image-search-app-nine-sigma.vercel.app/',
    github:      null,
  },
  {
    id: 3, category: 'frontend',
    title:       'Analytics Dashboard',
    description: 'Interactive dashboard with dynamic charts and data visualization using Chart.js and React.',
    tags:        ['React 18', 'Chart.js', 'Vite', 'CSS'],
    images:      ['/images/analytics-dashboard.png'],
    url:         'https://analytics-dashboard-mu-seven.vercel.app/',
    github:      null,
  },
  {
    id: 4, category: 'frontend',
    title:       'Weather App',
    description: 'Real-time weather application with location-based forecasts and clean responsive UI.',
    tags:        ['React', 'Vite', 'Weather API'],
    images:      ['/images/weather-app.png'],
    url:         'https://weather-app-dun-three-80.vercel.app/',
    github:      null,
  },
  {
    id: 5, category: 'frontend',
    title:       'Task Manager',
    description: 'Clean task management app with CRUD operations and local storage persistence.',
    tags:        ['JavaScript', 'CSS', 'HTML'],
    images:      ['/images/task-manager.png'],
    url:         'https://task-manager-topaz-pi-74.vercel.app/',
    github:      null,
  },
  {
    id: 6, category: 'frontend',
    title:       "Pharmacie de l'Espoir 💊",
    description: "Full-stack pharmacy management system built for a real pharmacy in Goma, DRC. Includes medicine inventory with low-stock alerts, automatic PDF invoices with 16% DRC VAT, Excel export, a REST API for partner clinics (CBCA, Heal Africa), and role-based access for admin, pharmacist, and cashier.",
    tags:        ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'REST API', 'DomPDF'],
    images:      [
      '/images/pharmacie-1.png',
      '/images/pharmacie-2.png',
      '/images/pharmacie-3.png',
    ],
    url:         null,
    github:      'https://github.com/Lusengeruth/pharmacie-espoir',
  },
  {
    id: 7, category: 'frontend',
    title:       'Dev Portfolio v1',
    description: 'My first portfolio — responsive developer portfolio with smooth animations and dark mode.',
    tags:        ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    images:      ['/images/portfolio-v1.png'],
    url:         'https://ruth-dev-portfolio.vercel.app/',
    github:      null,
  },
]

// ─── PROJECT FILTERS ──────────────────────────────────────────
export const projectFilters = [
  { label: 'All Projects',  value: 'all' },
  { label: 'Frontend',      value: 'frontend' },
  { label: 'Mobile Apps',   value: 'mobile' },
  { label: 'Data Analysis', value: 'data' },
]
