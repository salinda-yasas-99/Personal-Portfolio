import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'

function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="container-pad">
        <SectionTitle
          eyebrow="About Me"
          title="Engineer Focused On Impact"
          subtitle="I build reliable software with strong backend foundations and practical product thinking."
        />

        <Card className="grid gap-6 sm:grid-cols-[220px_1fr] sm:gap-8">
          <motion.div
            className="gradient-ring rounded-2xl p-[1px]"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex h-56 items-center justify-center rounded-2xl bg-slate-900 text-center sm:h-full">
              <div>
                <p className="font-display text-4xl font-bold gradient-text">SY</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                  Profile Placeholder
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            <p>
              I am a passionate and hardworking software engineer who enjoys learning
              new technologies and building efficient software solutions. I focus on
              developing scalable backend systems, REST APIs, and full-stack web
              applications.
            </p>
            <p>
              I have industry experience working with ASP.NET Core, C#, MySQL,
              Azure, and Firebase, and I enjoy collaborating with teams to deliver
              reliable and high-quality software.
            </p>
            <p>
              Currently, I work as a Software Engineer at Sitecore, developing
              enterprise solutions using Microsoft technologies.
            </p>
            <p>
              My goal is to continue growing as a software engineer while
              contributing to impactful and innovative software products.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default About
