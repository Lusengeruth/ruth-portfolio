// ─── PERSONAL INFO ────────────────────────────────────────────
export const personal = {
  name:         'Ruth Lusenge',
  initials:     'RL',
  taglines:     ['Frontend Developer', 'Mobile App Developer', 'Data Analyst'],
  location:     'Democratic Republic of Congo',
  phone:        '+243 977 721 625',
  email:        'lusengeruth26@email.com',     
  linkedin:     'www.linkedin.com/in/ruth-lusenge',
  linkedinLabel:'Ruth Lusenge',
  cvUrl:        '/ruth-lusenge-cv.pdf',        
  bio: [
    "I'm a passionate developer from the Democratic Republic of Congo, specializing in creating beautiful, functional and responsive applications. With expertise in frontend development, mobile app creation, and data analysis, I bring a well-rounded skill set to every project.",
    'My approach combines technical precision with creative problem-solving to deliver exceptional user experiences. I\'m constantly learning new technologies and methods to stay at the forefront of digital innovation.',
  ],
  social: {
    github:    'https://github.com/',        
    twitter:   'https://twitter.com/',
    instagram: 'https://instagram.com/',
    linkedin:  '',
  },
}

// ─── NAV LINKS ────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home',     href: 'home' },
  { label: 'About',   href: 'about' },
  { label: 'Skills',  href: 'skills' },
  { label: 'Projects',href: 'projects' },
  { label: 'Contact', href: 'contact' },
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
    title:       'E-commerce Website',
    description: 'A responsive e-commerce platform built with React and TailwindCSS.',
    tags:        ['React', 'TailwindCSS', 'Redux'],
    image:       'https://pfst.cf2.poecdn.net/6e8d69ebfe74f1af47cc4e1dcc4d24b2.svg',
    url:         '#',
  },
  {
    id:          2,
    category:    'frontend',
    title:       'Portfolio Template',
    description: 'A customizable portfolio template with dark mode support.',
    tags:        ['HTML5', 'CSS3', 'JavaScript'],
    image:       'https://pfst.cf2.poecdn.net/f59d9fe55850d9d2ce5b5eef08f8b9e3.svg',
    url:         '#',
  },
  {
    id:          3,
    category:    'mobile',
    title:       'Fitness Tracker App',
    description: 'A mobile app for tracking workouts and health metrics.',
    tags:        ['Flutter', 'Dart', 'Firebase'],
    image:       'https://pfst.cf2.poecdn.net/3cdefd3d77f57fb85a32f7f0d4499992.svg',
    url:         '#',
  },
  {
    id:          4,
    category:    'mobile',
    title:       'Food Delivery App',
    description: 'A food delivery application with real-time order tracking.',
    tags:        ['Flutter', 'Dart', 'Maps API'],
    image:       'https://pfst.cf2.poecdn.net/59e3eeaf24d0d1c6ab4e1b2a03e52b08.svg',
    url:         '#',
  },
  {
    id:          5,
    category:    'data',
    title:       'Sales Dashboard',
    description: 'An interactive dashboard for sales performance analysis.',
    tags:        ['Python', 'Pandas', 'Plotly'],
    image:       'https://pfst.cf2.poecdn.net/96621a41adf2ecaa0e6c9b18c1eb5520.svg',
    url:         '#',
  },
  {
    id:          6,
    category:    'data',
    title:       'Predictive Model',
    description: 'A machine learning model for customer behavior prediction.',
    tags:        ['Python', 'Scikit-learn', 'TensorFlow'],
    image:       'https://pfst.cf2.poecdn.net/b9c12d5c9743a0a2f1dad2efbb8a1e0f.svg',
    url:         '#',
  },
]

// ─── PROJECT FILTERS ──────────────────────────────────────────
export const projectFilters = [
  { label: 'All Projects',  value: 'all' },
  { label: 'Frontend',      value: 'frontend' },
  { label: 'Mobile Apps',   value: 'mobile' },
  { label: 'Data Analysis', value: 'data' },
]
