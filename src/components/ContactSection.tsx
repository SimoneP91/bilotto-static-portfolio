import { type CSSProperties } from 'react'

function ContactSection() {
  return (
    <section id="contact" className="section section--contact">
      <div className="contact animate-on-scroll" style={{ '--stagger': 0 } as CSSProperties}>
        <div>
          <h2>
            Pronto a <span className="text-accent">dare voce</span> alle tue idee?
          </h2>
          <p>
            Scrivimi su hello@bilottostudio.it o compila il form per iniziare a progettare la prossima campagna. Rispondo
            entro 24 ore.
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
  )
}

export default ContactSection
