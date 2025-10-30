import { type CSSProperties } from 'react'

const stats = [
  { value: '+120%', label: 'engagement medio nelle campagne' },
  { value: '3x', label: 'crescita delle community in 6 mesi' },
  { value: '15', label: 'brand seguiti tra moda, food e tech' },
]

const heroImage = '/img/bil1.jpg'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__badge animate-on-scroll" style={{ '--stagger': 0 } as CSSProperties}>
        Social Media Promotion
      </div>
      <h1 className="animate-on-scroll" style={{ '--stagger': 0.6 } as CSSProperties}>
        Trasforma il tuo brand
        <span className="text-accent"> in una presenza magnetica</span>
      </h1>
      <p className="hero__lead animate-on-scroll" style={{ '--stagger': 1.1 } as CSSProperties}>
        Creo ecosistemi narrativi che parlano la lingua della tua community, amplificando engagement e conversioni su tutte
        le piattaforme chiave.
      </p>

      <div className="hero__media-wrapper animate-on-scroll" style={{ '--stagger': 1.65 } as CSSProperties}>
        <div className="hero__media">
          <img src={heroImage} alt="Ritratto creativo per servizi di social media promotion" loading="lazy" />
        </div>
      </div>

      <div className="hero__actions animate-on-scroll" style={{ '--stagger': 2.1 } as CSSProperties}>
        <a className="button button--primary" href="#services">
          Scopri i servizi
        </a>
        <a className="button button--ghost" href="#contact">
          Prenota una call
        </a>
      </div>

      <ul className="hero__stats animate-on-scroll" style={{ '--stagger': 2.6 } as CSSProperties}>
        {stats.map((stat, index) => (
          <li key={stat.label} style={{ '--stagger': index + 3 } as CSSProperties} className="animate-on-scroll">
            <span className="hero__stat-value">{stat.value}</span>
            <span className="hero__stat-label">{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Hero
