import { type CSSProperties } from 'react'

const services = [
  {
    title: 'Strategia con personalità',
    description:
      'Analisi del brand, posizionamento e storytelling per parlare con la voce giusta su ogni piattaforma.',
    points: ['Tone of voice dedicato', 'Calendario editoriale dinamico', 'Visual directions coerenti'],
  },
  {
    title: 'Contenuti magnetici',
    description:
      'Format video, caroselli e microcopy pensati per fermare lo scroll e trasformare le view in interazioni reali.',
    points: ['Serie vertical & short form', 'Copywriting ottimizzato', 'Collaborazioni con creator'],
  },
  {
    title: 'Growth & performance',
    description:
      'Social ads, influencer marketing e reportistica data-driven per scalare risultati senza perdere autenticità.',
    points: ['Campagne multi-piattaforma', 'Metriche in tempo reale', 'Ottimizzazioni settimanali'],
  },
]

function ServicesSection() {
  return (
    <section id="services" className="section section--grid">
      <div className="section__header animate-on-scroll" style={{ '--stagger': 0 } as CSSProperties}>
        <h2>
          <span className="text-accent">Servizi su misura</span> per campagna e community
        </h2>
        <p>
          Ogni piano parte dall’identità del brand e si evolve in un flusso di contenuti e collaborazioni che mantengono viva
          la conversazione.
        </p>
      </div>

      <div className="card-grid">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="service-card animate-on-scroll"
            style={{ '--stagger': index + 0.5 } as CSSProperties}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
