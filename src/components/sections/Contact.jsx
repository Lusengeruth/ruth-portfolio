import { useState } from 'react'
import { personal } from '@/data/portfolio'
import SocialIcon from '@/components/ui/SocialIcon'

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }
const FORMSPREE_URL = 'https://formspree.io/f/xdapwdrr'

const contactItems = [
  {
    icon:  'fa-envelope',
    label: 'Email',
    render: (p) => (
      <a href={`mailto:${p.email}`} className="text-gray-600 dark:text-gray-300 hover:text-primary transition">
        {p.email}
      </a>
    ),
  },
  {
    icon:  'fa-phone',
    label: 'Phone',
    render: (p) => (
      <a href={`tel:${p.phone.replace(/\s/g, '')}`} className="text-gray-600 dark:text-gray-300 hover:text-primary transition">
        {p.phone}
      </a>
    ),
  },
  {
    icon:  'fa-map-marker-alt',
    label: 'Location',
    render: (p) => (
      <span className="text-gray-600 dark:text-gray-300">{p.location}</span>
    ),
  },
]

const inputCls = `
  w-full p-3 text-base rounded-lg outline-none transition
  bg-white dark:bg-gray-800
  border border-gray-300 dark:border-gray-700
  focus:ring-2 focus:ring-primary focus:border-primary
`

export default function Contact() {
  const [form, setForm]     = useState(INITIAL_FORM)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status) setStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, message } = form
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(form),
      })
      if (res.ok) { setForm(INITIAL_FORM); setStatus('success') }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <div className="space-y-6">
              {contactItems.map(({ icon, label, render }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${icon} text-primary`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{label}</h4>
                    {render(personal)}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-3">
                <SocialIcon href={personal.social.github}    icon="fa-github" />
                <SocialIcon href={personal.social.linkedin}  icon="fa-linkedin-in" />
                <SocialIcon href={personal.social.facebook}  icon="fa-facebook-f" />
                <SocialIcon href={personal.social.instagram} icon="fa-instagram" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            {status === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-sm font-medium">
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm font-medium">
                ⚠️ Please fill in your name, email, and message.
              </div>
            )}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {[
                { id: 'name',    label: 'Your Name',  type: 'text',  placeholder: 'John Doe' },
                { id: 'email',   label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
                { id: 'subject', label: 'Subject',    type: 'text',  placeholder: 'Project Inquiry' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium mb-2">{label}</label>
                  <input id={id} name={id} type={type} placeholder={placeholder}
                    value={form[id]} onChange={handleChange} className={inputCls} />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows={4}
                  placeholder="Hello, I'd like to talk about..."
                  value={form.message} onChange={handleChange} className={inputCls} />
              </div>
              <button type="submit" disabled={status === 'sending'}
                className="w-full py-3 px-6 bg-primary hover:bg-primary/90 text-white
                           font-semibold rounded-lg transition duration-300
                           flex items-center justify-center gap-2
                           disabled:opacity-60 disabled:cursor-not-allowed">
                {status === 'sending' ? (
                  <><i className="fas fa-spinner fa-spin" /> Sending...</>
                ) : (
                  <>Send Message <i className="fas fa-paper-plane" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
