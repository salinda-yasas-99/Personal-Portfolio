import GithubIcon from '../assets/svgs/github.svg'
import LinkedinIcon from '../assets/svgs/linkedin.svg'
import MediumIcon from '../assets/svgs/medium.svg'
import WebsiteIcon from '../assets/svgs/website.svg'
import EmailIcon from '../assets/svgs/email.svg'
import PhoneIcon from '../assets/svgs/phone.svg'
import LocationIcon from '../assets/svgs/location.svg'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/salinda-yasas-99', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/salinda-yasas-813716216/', icon: LinkedinIcon },
  // { label: 'Medium', href: 'https://medium.com/', icon: MediumIcon },
  { label: 'Personal Website', href: 'https://salinda-yasas.web.app/', icon: WebsiteIcon },
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const contactInfo = [
  {
    icon: EmailIcon,
    label: 'salindayasasofficial@gmail.com',
    href: 'mailto:salindayasasofficial@gmail.com',
  },
  { icon: PhoneIcon, label: '+94 77 870 7815', href: 'tel:+94778707815' },
  { icon: LocationIcon, label: 'Kadawatha, Sri Lanka', href: '#' },
]

function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/70">
      <div className="container-pad py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand + bio */}
          <div>
            <h3 className="gradient-text font-display text-2xl font-bold">Salinda Yasas</h3>
            <p className="mt-1 text-sm font-semibold text-emerald-300">Software Engineer</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Passionate software engineer focused on building scalable backend systems,
              REST APIs, and full-stack web applications using modern technologies.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="glass-panel flex h-9 w-9 items-center justify-center rounded-xl transition hover:border-cyan-400/50"
                >
                  <img src={item.icon} alt="" className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-5 font-display text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
                  >
                    <span className="text-emerald-400">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-display text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-cyan-300"
                >
                  <img src={item.icon} alt="" className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="break-words">{item.label}</span>
                </a>
              ))}
            </div>
            <div className="mt-7">
              <a
                href="https://drive.google.com/file/d/1US_z2bLG_ku5vFsw2013mOyqLyfnaVCz/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-2.5 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/20 hover:text-white"
              >
                ↓ Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-slate-800/60 py-5">
        <div className="container-pad flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Salinda Yasas. All rights reserved.</p>
          <p>Built with React · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
