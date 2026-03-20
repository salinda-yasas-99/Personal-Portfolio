import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'
import EmailIcon from '../assets/svgs/email.svg'
import PhoneIcon from '../assets/svgs/phone.svg'
import LocationIcon from '../assets/svgs/location.svg'

const contacts = [
  {
    label: 'Email',
    value: 'salindayasasofficial@gmail.com',
    href: 'mailto:salindayasasofficial@gmail.com',
    icon: EmailIcon,
  },
  {
    label: 'Phone',
    value: '+94 77 870 7815',
    href: 'tel:+94778707815',
    icon: PhoneIcon,
  },
  {
    label: 'Location',
    value: 'Kadawatha, Sri Lanka',
    href: '#',
    icon: LocationIcon,
  },
]

function Contact() {
  return (
    <section id="contact" className="section-wrap">
      <div className="container-pad">
        <SectionTitle
          eyebrow="Contact"
          title="Let Us Build Something Great"
          subtitle="Open to opportunities in backend, full-stack, and cloud-focused engineering projects."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <h3 className="font-display text-xl font-semibold text-white">Reach Out</h3>
            <div className="mt-5 space-y-4">
              {contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="glass-panel flex items-center gap-3 rounded-xl p-3 transition hover:border-emerald-400/40"
                >
                  <img src={item.icon} alt={`${item.label} icon`} className="h-5 w-5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                    <p className="text-sm text-slate-200">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </Card>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="glass-panel space-y-4 rounded-2xl p-6"
          >
            <h3 className="font-display text-xl font-semibold text-white">Contact Form</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-200 outline-none transition focus:border-emerald-400/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-200 outline-none transition focus:border-emerald-400/50"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-200 outline-none transition focus:border-emerald-400/50"
            />
            <button
              type="button"
              className="w-full rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:shadow-[0_0_26px_rgba(16,185,129,0.35)]"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
