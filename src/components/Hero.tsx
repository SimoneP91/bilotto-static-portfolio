import { type CSSProperties } from 'react'

const metrics = [
	{ value: '+156K', label: 'community aggregate sui canali gestiti' },
	{ value: '48h', label: 'tempo medio per attivare un piano editoriale' },
	{ value: '3x', label: 'crescita media del tasso di engagement' },
]

function Hero() {
	return (
		<section id="home" className="hero" aria-labelledby="hero-title">
			<div className="hero__content animate-on-scroll" style={{ '--stagger': 0 } as CSSProperties}>
				<span className="hero__badge">Social media leadership</span>
				<h1 id="hero-title">
					Costruiamo brand che vivono oltre
					<span className="text-accent"> l'algoritmo</span>
				</h1>
				<p>
					Bilotto Studio orchestra strategia, creativita e performance per trasformare piattaforme social in hub di relazione.
					Guidiamo il tuo team dal brief al go-live, con rituali di ottimizzazione settimanali.
				</p>
				<div className="hero__actions">
					<a className="button button--primary" href="#contact">
						Prenota una sessione
					</a>
					<a className="button button--ghost" href="#strategie">
						Guarda i progetti
					</a>
				</div>
				<dl className="hero__metrics">
					{metrics.map((metric, index) => (
						<div key={metric.label} className="hero__metric animate-on-scroll" style={{ '--stagger': index + 1 } as CSSProperties}>
							<dt>{metric.value}</dt>
							<dd>{metric.label}</dd>
						</div>
					))}
				</dl>
			</div>

			<figure className="hero__media animate-on-scroll" style={{ '--stagger': 0.8 } as CSSProperties}>
				<img src="/img/bil1.jpg" alt="Stratega digitale al lavoro su una moodboard" loading="lazy" />
				<figcaption>Ogni progetto nasce da insight concreti e creativita condivisa.</figcaption>
			</figure>
		</section>
	)
}

export default Hero
