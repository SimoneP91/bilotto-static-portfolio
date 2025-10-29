import './App.css'

const stats = [
  { value: '+120%', label: 'engagement medio nelle campagne' },
  { value: '3x', label: 'crescita delle community in 6 mesi' },
  { value: '15', label: 'brand seguiti tra moda, food e tech' },
]

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

const heroImage = '/img/bil1.jpg'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="navbar__inner">
          <a className="navbar__brand" href="#home">
            Bilotto Studio
          </a>
          <nav className="navbar__menu">
            <a className="navbar__link" href="#home">
              Home
            </a>
          </nav>
        </div>
      </header>

      <main className="page">
        <section id="home" className="hero">
          <div className="hero__badge">Social Media Promotion</div>
          <h1>
            Trasforma il tuo brand
            <span className="text-accent"> in una presenza magnetica</span>
          </h1>
          <p className="hero__lead">
            Creo ecosistemi narrativi che parlano la lingua della tua community, amplificando engagement e conversioni su
            tutte le piattaforme chiave.
          </p>

          <div className="hero__media">
            <img src={heroImage} alt="Ritratto creativo per servizi di social media promotion" loading="lazy" />
          </div>

          <div className="hero__actions">
            <a className="button button--primary" href="#services">
              Scopri i servizi
            </a>
            <a className="button button--ghost" href="#contact">
              Prenota una call
            </a>
          </div>

          <ul className="hero__stats">
            {stats.map((stat) => (
              <li key={stat.label}>
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="services" className="section section--grid">
          <div className="section__header">
            <h2>
              <span className="text-accent">Servizi su misura</span> per campagna e community
            </h2>
            <p>
              Ogni piano parte dall’identità del brand e si evolve in un flusso di contenuti e collaborazioni che
              mantengono viva la conversazione.
            </p>
          </div>

          <div className="card-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
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

        <section className="section section--highlight">
          <div className="highlight">
            <span className="highlight__eyebrow">Metodo Bilotto</span>
            <p>
              Analizzo dati e conversazioni ogni settimana, intervenendo sulle leve creative e media per fare crescere il
              tuo pubblico senza perdere autenticità.
            </p>
          </div>
        </section>

        <section id="contact" className="section section--contact">
          <div className="contact">
            <div>
              <h2>
                Pronto a <span className="text-accent">dare voce</span> alle tue idee?
              </h2>
              <p>
                Scrivimi su hello@bilottostudio.it o compila il form per iniziare a progettare la prossima campagna.
                Rispondo entro 24 ore.
              </p>
            </div>
            <div className="contact__cta">
              <a className="button button--primary" href="mailto:hello@bilottostudio.it">
                Mandami un brief
              </a>
              <span className="contact__availability">Slot disponibili per nuovi progetti da marzo 2025</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="footer__brand">Bilotto Studio</span>
        <span>Social media promotion & storytelling digitale</span>
        <span className="footer__legal">© {new Date().getFullYear()} Tutti i diritti riservati.</span>
      </footer>
    </div>
  )
}

export default App
