import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import { projectsData } from '../data/projects'
import GradientButton from './ui/GradientButton'
import ProjectModal from './ProjectModal'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="section-wrap">
      <div className="container-pad">
        <SectionTitle
          eyebrow="Featured Projects"
          title="Selected Work"
          subtitle="A mix of full-stack products, backend systems, and API-focused solutions. Click any card to learn more."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -4 }}
              onClick={() => setSelectedProject(project)}
              className="glass-panel flex cursor-pointer flex-col overflow-hidden rounded-2xl"
            >
              {/* Cover image */}
              <div
                className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.coverGradient}`}
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
                <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-white/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
                    Preview
                  </p>
                  <p className="mt-1 px-4 text-center font-display text-xl font-bold text-white">
                    {project.name}
                  </p>
                </div>
                {/* Mock browser bar */}
                <div className="absolute left-3 right-3 top-3 flex items-center gap-1.5 rounded-lg bg-black/20 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                  <span className="h-2 w-2 rounded-full bg-green-400/70" />
                  <div className="ml-2 h-1.5 w-20 rounded bg-white/25" />
                </div>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-semibold text-white">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.description}</p>
                <p className="mt-3 text-sm font-medium text-cyan-300">Role: {project.role}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-emerald-400/35 bg-slate-800/70 px-2.5 py-1 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="rounded-lg border border-slate-600/40 bg-slate-800/70 px-2.5 py-1 text-xs text-slate-400">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                <div
                  className="mt-auto flex flex-wrap items-center gap-2 pt-5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GradientButton href={project.github} variant="secondary">
                    GitHub
                  </GradientButton>
                  <GradientButton href={project.demo}>Live Demo</GradientButton>
                  <button
                    type="button"
                    className="ml-auto rounded-lg border border-cyan-400/35 px-3 py-1.5 text-xs font-medium text-cyan-300 transition hover:bg-cyan-400/10"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project)
                    }}
                  >
                    Details →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.name}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
