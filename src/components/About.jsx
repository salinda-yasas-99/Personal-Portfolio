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

        <Card className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-8 h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative grid gap-6 lg:grid-cols-[1.45fr_0.95fr] lg:gap-8">
            <div className="space-y-5 !text-white">
              <p className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Building Software That Matters
              </p>

              <p className="text-sm leading-relaxed !text-white sm:text-base">
                I am a software engineer focused on building efficient, reliable
                solutions that solve real problems. My core strengths are{' '}
                <span className="font-semibold gradient-text">
                  scalable backend systems, REST APIs, and full-stack web applications
                </span>
                .
              </p>

              <p className="text-sm leading-relaxed !text-white sm:text-base">
                I have hands-on industry experience with ASP.NET Core, C#, MySQL,
                Azure, and Firebase, and I enjoy collaborating with teams to deliver
                high-quality software.
              </p>
                <p className="text-sm leading-relaxed !text-white sm:text-base">
                My goal is to keep growing as an engineer while contributing to
                impactful, user-focused products.
              </p>

             
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Core Focus
                </p>
                <p className="mt-2 text-sm text-white">Scalable backend engineering</p>
              </div>

              <div className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Collaboration
                </p>
                <p className="mt-2 text-sm text-white">Clear communication and team-first delivery</p>
              </div>

              <div className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
                  Direction
                </p>
                <p className="mt-2 text-sm text-white">Impactful, user-focused products</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default About
