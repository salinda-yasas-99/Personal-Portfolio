import { motion } from 'framer-motion'
import GradientButton from './ui/GradientButton'
import GithubIcon from '../assets/svgs/github.svg'
import LinkedinIcon from '../assets/svgs/linkedin.svg'
import MediumIcon from '../assets/svgs/medium.svg'
import WebsiteIcon from '../assets/svgs/website.svg'
import ProfileImage from '../assets/images/profile img.jpg'

const socialLinks = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/salinda-yasas-99' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/salinda-yasas-813716216/' },
  { icon: WebsiteIcon, label: 'Website', href: 'https://salinda-yasas.web.app/' },
]

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden section-wrap">
      <motion.div
        className="pointer-events-none absolute -left-20 top-28 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute -right-20 top-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container-pad relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.05, ease: 'easeOut' }}
            className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border border-emerald-400/45 shadow-[0_0_35px_rgba(16,185,129,0.22)] sm:mb-8 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-52 lg:w-52"
          >
            <img
              src={ProfileImage}
              alt="Salinda Yasas profile"
              className="h-full w-full object-cover"
            />
          </motion.div>

         
          <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            <span className="gradient-text">Salinda Yasas</span>
            <br />
            <span className="text-2xl font-semibold text-slate-200 sm:text-3xl">
              Software Engineer
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed !text-white/80 sm:text-base">
            Highly motivated Software Engineer passionate about building scalable web
            applications and learning new technologies. I enjoy solving real-world
            problems through clean, efficient code and modern software architecture.
          </p>

          <p className="mt-6 text-sm text-slate-300">
            I specialize in architecting robust, scalable applications across the full stack. 
            Leveraging ASP.NET Core, Spring Boot,Express js and modern JavaScript frameworks, 
            I deliver comprehensive end-to-end solutions. Backed by a B.Sc. (Hons) in Information Technology 
            from the University of Moratuwa, my expertise combines deep backend engineering with hands-on cloud 
            service integration.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <GradientButton href="#projects">View My Projects</GradientButton>
            <GradientButton href="#contact" variant="secondary">
              Contact Me
            </GradientButton>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {socialLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                className="glass-panel flex h-11 w-11 items-center justify-center rounded-xl"
                aria-label={item.label}
              >
                <img src={item.icon} alt={`${item.label} icon`} className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
