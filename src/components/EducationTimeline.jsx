import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import { educationData } from '../data/education'

function EducationTimeline() {
  return (
    <section id="education" className="section-wrap">
      <div className="container-pad">
        <SectionTitle
          eyebrow="Education"
          title="Academic Milestones"
          subtitle="Foundational academic path with strong analytical and technical focus."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400/70 via-indigo-500/60 to-cyan-400/70 md:left-1/2" />

          <div className="space-y-8">
            {educationData.map((item, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.article
                  key={`${item.title}-${item.period}`}
                  initial={{ opacity: 0, x: isLeft ? -26 : 26 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                  className={`relative pl-12 md:w-1/2 md:pl-0 ${
                    isLeft ? 'md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <span
                    className={`absolute left-[9px] top-7 h-3 w-3 rounded-full shadow-[0_0_14px_rgba(129,140,248,0.75)] ${
                      isLeft
                        ? 'bg-indigo-300 md:left-auto md:right-[-6px]'
                        : 'bg-cyan-300 md:left-[-6px]'
                    }`}
                  />

                  <div className="glass-panel rounded-2xl p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">
                      {item.period}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-indigo-300">{item.institution}</p>
                    {item.details.length ? (
                      <ul className="mt-4 space-y-2 text-sm text-slate-300">
                        {item.details.map((detail) => (
                          <li key={detail}>- {detail}</li>
                        ))}
                      </ul>
                    ) : null}
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

export default EducationTimeline
