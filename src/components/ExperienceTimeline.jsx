import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import { experienceData } from '../data/experience'

function ExperienceTimeline() {
  return (
    <section id="experience" className="section-wrap">
      <div className="container-pad">
        <SectionTitle
          eyebrow="Work Experience"
          title="Professional Journey"
          subtitle="A timeline of engineering roles focused on backend excellence and enterprise delivery."
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-indigo-500/70 via-cyan-400/60 to-indigo-500/70 md:left-1/2" />

          <div className="space-y-8">
            {experienceData.map((item, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.article
                  key={`${item.company}-${item.period}`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                  className={`relative pl-12 md:w-1/2 md:pl-0 ${
                    isLeft ? 'md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <span
                    className={`absolute left-[9px] top-7 h-3 w-3 rounded-full shadow-[0_0_14px_rgba(34,211,238,0.8)] ${
                      isLeft
                        ? 'bg-cyan-300 md:left-auto md:right-[-6px]'
                        : 'bg-indigo-300 md:left-[-6px]'
                    }`}
                  />

                  <div className="glass-panel rounded-2xl p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">
                      {item.period}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-indigo-300">{item.company}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      {item.points.map((point) => (
                        <li key={point}>- {point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline
