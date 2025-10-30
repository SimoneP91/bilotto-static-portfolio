import { type CSSProperties } from 'react'

function Footer() {
  return (
    <footer className="footer animate-on-scroll" style={{ '--stagger': 0 } as CSSProperties}>
      <span className="footer__brand">Bilotto Studio</span>
      <span>Social media promotion & storytelling digitale</span>
      <span className="footer__legal">© {new Date().getFullYear()} Tutti i diritti riservati.</span>
    </footer>
  )
}

export default Footer
