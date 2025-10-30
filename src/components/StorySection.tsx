import { type CSSProperties } from 'react'

function StorySection() {
	return (
		<section id="chi-siamo" className="story" aria-labelledby="story-title">
			<div className="story__inner">
				<div className="story__content animate-on-scroll" style={{ '--stagger': 0 } as CSSProperties}>
					<span className="story__eyebrow">Dietro le quinte</span>
					<h2 id="story-title">Metodo, curiosita e vita reale a servizio dei brand</h2>
					<p>
						Bilotto Studio nasce dall'unione tra strategia e creativita. Da dieci anni traduciamo conversazioni, dati e cultura
						pop in percorsi che rendono memorabili i marchi italiani nel digitale.
					</p>
					<p>
						Lavoriamo in remoto, testiamo format ogni settimana e guidiamo team interni a crescere in autonomia. Il nostro approccio
						mette al centro persone, metriche e ritmo narrativo, cosi ogni campagna resta autentica e performante.
					</p>
					<ul className="story__highlights">
						<li>Team multidisciplinare con base a Milano, Roma e Barcellona</li>
						<li>Festival annuale dedicato alla creator economy con 2.500 partecipanti</li>
						<li>Partnership continuative con brand fashion, travel e food</li>
					</ul>
				</div>

				<figure className="story__media animate-on-scroll" style={{ '--stagger': 0.6 } as CSSProperties}>
					<img src="/img/bil3.jpg" alt="Ritratto del team Bilotto in studio" loading="lazy" />
					<figcaption>Creativita e analisi convivono in ogni progetto.</figcaption>
				</figure>
			</div>
		</section>
	)
}

export default StorySection
