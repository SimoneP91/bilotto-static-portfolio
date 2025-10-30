import { type CSSProperties } from 'react'

function HighlightSection() {
  return (
    <section className="section section--highlight">
      <div className="highlight animate-on-scroll" style={{ '--stagger': 0 } as CSSProperties}>
        <span className="highlight__eyebrow">Metodo Bilotto</span>
        <p>
          Analizzo dati e conversazioni ogni settimana, intervenendo sulle leve creative e media per fare crescere il tuo
          pubblico senza perdere autenticita.
        </p>
      </div>
    </section>
  )
}

export default HighlightSection
