import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'
import { skillGroups } from '../data/skills'
import CodeIcon from '../assets/svgs/code.svg'
import FrontendIcon from '../assets/svgs/frontend.svg'
import BackendIcon from '../assets/svgs/backend.svg'
import DatabaseIcon from '../assets/svgs/database.svg'
import ToolsIcon from '../assets/svgs/tools.svg'
import CloudIcon from '../assets/svgs/cloud.svg'

const iconMap = {
  'Programming Languages': CodeIcon,
  Frontend: FrontendIcon,
  Backend: BackendIcon,
  Databases: DatabaseIcon,
  Tools: ToolsIcon,
  Cloud: CloudIcon,
}

function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <div className="container-pad">
        <SectionTitle
          eyebrow="Skills & Expertise"
          title="Technology Stack"
          subtitle="Core technologies and tools used to design, build, and deliver quality software."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Card key={group.title} delay={index * 0.06}>
              <div className="flex items-center gap-3">
                <img
                  src={iconMap[group.title]}
                  alt={`${group.title} icon`}
                  className="h-8 w-8"
                />
                <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-cyan-400/25 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
