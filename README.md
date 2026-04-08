# Ruth Lusenge — Portfolio

A production-grade React portfolio built with **Vite**, **Tailwind CSS**, and proper component architecture.

## Tech Stack

| Tool | Purpose |
|---|---|
| Vite 5 | Build tool + dev server |
| React 18 | UI framework |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations (ready to use) |
| ESLint | Code linting |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server  →  http://localhost:5173
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

---

## Project Structure

```
ruth-portfolio/
├── index.html
├── package.json
├── vite.config.js          ← @ alias → /src
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx             ← React root (StrictMode)
    ├── App.jsx              ← Layout shell, wires sections + hooks
    ├── styles/
    │   └── index.css        ← Tailwind directives + global CSS
    ├── data/
    │   └── portfolio.js     ← ✅ ALL content lives here
    ├── hooks/
    │   ├── useTypingAnimation.js
    │   ├── useDarkMode.js
    │   ├── useActiveSection.js
    │   └── index.js         ← barrel export
    ├── utils/
    │   └── scroll.js        ← smooth scroll helpers
    └── components/
        ├── ui/              ← Reusable atoms
        │   ├── SocialIcon.jsx
        │   ├── SkillBar.jsx
        │   └── Badge.jsx
        ├── layout/          ← App shell
        │   ├── Navbar.jsx
        │   └── Footer.jsx
        └── sections/        ← Page sections
            ├── Hero.jsx
            ├── About.jsx
            ├── Skills.jsx
            ├── Projects.jsx
            └── Contact.jsx
```

---

## Customising Your Content

**Everything is in `src/data/portfolio.js`** — you never need to touch a component to update your info.

### Update personal info
```js
export const personal = {
  name:    'Ruth Lusenge',
  email:   'your@email.com',   // ← your real email
  phone:   '+243 977 721 625',
  cvUrl:   '/ruth-lusenge-cv.pdf',  // drop CV in /public
  social: {
    github:   'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/you',
    // ...
  }
}
```

### Add a project
```js
export const projects = [
  {
    id:          7,
    category:    'frontend',   // 'frontend' | 'mobile' | 'data'
    title:       'My New Project',
    description: 'What it does.',
    tags:        ['React', 'Node.js'],
    image:       '/images/my-project.png',  // drop image in /public/images
    url:         'https://myproject.com',
  },
  // ...
]
```

---

## Wiring Up the Contact Form

The form is ready — just add EmailJS or Formspree:

### Option A — Formspree (easiest, free)
```jsx
// In Contact.jsx, replace the TODO comment:
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

### Option B — EmailJS
```bash
npm install @emailjs/browser
```
```jsx
import emailjs from '@emailjs/browser'
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
```

---

## Deploying

### Vercel (recommended — free)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# drag the /dist folder into netlify.com/drop
```

### GitHub Pages
```bash
# In vite.config.js add: base: '/your-repo-name/'
npm run build
# push /dist to gh-pages branch
```
