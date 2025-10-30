import { type CSSProperties } from 'react'

const resources = [
	{
		title: 'Blueprint per community che convertono',
		description: 'Le fasi chiave per costruire un pubblico fedele in 90 giorni.',
		link: '#community-blueprint',
	},
	{
		title: 'Manuale per brand director under 35',
		description: 'Decisioni strategiche, metriche e toolkit per crescere senza sprechi.',
		link: '#manuale-brand-director',
	},
	{
		title: 'Checklist per lanciare una campagna omnicanale',
		description: 'Asset, tappe e stakeholder per un go-live coordinato su ogni piattaforma.',
		link: '#checklist-omnicanale',
	},
]

function StarterGuide() {
	return (
		<section id="community-blueprint" className="resources" aria-labelledby="resources-title">
			<div className="resources__wrapper">
				<div className="resources__header animate-on-scroll" style={{ '--stagger': 0 } as CSSProperties}>
					<h2 id="resources-title">Materiali essenziali da cui partire</h2>
					<p>
						Scarica i playbook che usiamo con i team marketing per attivare strategie, talent e campagne senza perdere focus.
					</p>
				</div>

				<ul className="resources__list" role="list">
					{resources.map((resource, index) => (
						<li
							key={resource.title}
							className="resources__item animate-on-scroll"
							style={{ '--stagger': index + 0.6 } as CSSProperties}
						>
							<a href={resource.link}>
								<strong>{resource.title}</strong>
								<span>{resource.description}</span>
								<span className="resources__arrow" aria-hidden="true"></span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default StarterGuide
