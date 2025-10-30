import { type CSSProperties, useState, type FormEvent } from 'react'

function ContactSection() {
	const [status, setStatus] = useState('')

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setStatus('Grazie! Ti ricontatteremo entro 24 ore.')
	}

	return (
		<section id="contact" className="newsletter" aria-labelledby="newsletter-title">
			<div className="newsletter__inner">
				<div className="newsletter__content animate-on-scroll" style={{ '--stagger': 0 } as CSSProperties}>
					<h2 id="newsletter-title">Unisciti alla newsletter +156K</h2>
					<p>
						Ogni martedi condividiamo strategie, template operativi e casi studio per guidare il tuo brand tra community, creator e
						campagne.
					</p>
					<ul className="newsletter__bullets">
						<li>Formato short con takeaway applicabili subito</li>
						<li>Accesso prioritario a workshop e risorse esclusive</li>
						<li>Nessun spam: solo insight utili e metriche reali</li>
					</ul>
				</div>

				<form className="newsletter__form animate-on-scroll" style={{ '--stagger': 0.6 } as CSSProperties} onSubmit={handleSubmit}>
					<label htmlFor="newsletter-email" className="newsletter__label">
						Email
					</label>
					<input
						type="email"
						id="newsletter-email"
						name="email"
						placeholder="nome@azienda.it"
						required
						autoComplete="email"
					/>
					<button type="submit" className="button button--primary">
						Iscriviti ora
					</button>
					{status ? <p className="newsletter__status">{status}</p> : null}
					<p className="newsletter__privacy">
						Iscrivendoti accetti di ricevere aggiornamenti da Bilotto Studio. Puoi cancellarti in qualsiasi momento.
					</p>
				</form>
			</div>
		</section>
	)
}

export default ContactSection
