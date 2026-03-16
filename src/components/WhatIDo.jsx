import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'
import BackendIcon from '../assets/svgs/backend.svg'
import FullstackIcon from '../assets/svgs/fullstack.svg'
import ApiIcon from '../assets/svgs/api.svg'
import CloudIcon from '../assets/svgs/cloud.svg'

const services = [
  {
    title: 'Backend Development',
    description:
      'Build scalable and secure backend systems using ASP.NET Core and Spring Boot with RESTful API design.',
    icon: BackendIcon,
  },
  {
    title: 'Full Stack Development',
    description: 'Develop responsive applications using React, Next.js, and Angular.',
    icon: FullstackIcon,
  },
  {
    title: 'API Development',
    description: 'Design and document APIs using Swagger and Postman.',
    icon: ApiIcon,
  },
  {
    title: 'Cloud Integration',
    description: 'Deploy and integrate applications using Azure and Firebase.',
    icon: CloudIcon,
  },
]

function WhatIDo() {
  return (
    <section id="what-i-do" className="section-wrap">
      <div className="container-pad">
        <SectionTitle
          eyebrow="What I Do"
          title="Engineering Services"
          subtitle="From robust backend APIs to cloud-enabled full-stack platforms."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <Card key={service.title} delay={index * 0.08} className="h-full">
              <img src={service.icon} alt={`${service.title} icon`} className="h-10 w-10" />
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
