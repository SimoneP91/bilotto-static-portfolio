import { type CSSProperties } from 'react'

const offerings = [
	{
		number: '01',
		title: 'Strategia e governance',
		description:
			'Workshop, positioning canvas e framework operativi per allineare marketing, comunicazione e vendite.',
		points: ['Brand sprint e analisi tono di voce', 'Roadmap trimestrali con azioni prioritarie', 'Coaching continuo ai team interni'],
	},
	{
		number: '02',
		title: 'Produzione contenuti',
		description:
			'Studiamo format originali, calendari modulari e asset vertical-first coordinando creator e partner.',
		points: ['Video e live shopping', 'Serie editoriali e newsletters', 'Styleguide condivisa con il reparto design'],
	},
	{
		number: '03',
		title: 'Attivazioni e performance',
		description:
			'Campagne paid, influencer marketing e CRM orchestrati con reportistica in tempo reale.',
		points: ['Media buying data-driven', 'Community moderation con playbook', 'Dashboard di controllo condivisa'],
	},
]

function ServicesSection() {
	return (
		<section id="servizi" className="offerings" aria-labelledby="offerings-title">
			<div className="section__header animate-on-scroll" style={{ '--stagger': 0 } as CSSProperties}>
				<h2 id="offerings-title">Cosa possiamo fare insieme</h2>
				<p>
					Percorsi modulari pensati per integrare strategia, produzione e risultati. Ogni blocco si adatta al contesto del tuo team
					e agli obiettivi di business.
				</p>
			</div>

			<div className="offerings__grid">
				{offerings.map((offering, index) => (
					<article
						key={offering.title}
						className="offering-card animate-on-scroll"
						style={{ '--stagger': index + 0.6 } as CSSProperties}
					>
						<span className="offering-card__number">{offering.number}</span>
						<h3>{offering.title}</h3>
						<p>{offering.description}</p>
						<ul>
							{offering.points.map((point) => (
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
