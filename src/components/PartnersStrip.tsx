import { type CSSProperties } from 'react'

const partners = [
	{ name: 'Forbes Italia', detail: 'Case study su brand building' },
	{ name: 'Il Sole 24 Ore', detail: 'Strategie digitali in primo piano' },
	{ name: 'Vanity Fair', detail: 'Storytelling per community lifestyle' },
	{ name: 'Wired', detail: 'Innovazione e format originali' },
	{ name: 'Sky TG24', detail: 'Insight su social media marketing' },
]

function PartnersStrip() {
	return (
		<section className="partners" aria-label="Media che hanno raccontato i progetti Bilotto">
			<div className="partners__inner animate-on-scroll" style={{ '--stagger': 0 } as CSSProperties}>
				<span className="partners__eyebrow">Raccontato da</span>
				<ul className="partners__list" role="list">
					{partners.map((partner, index) => (
						<li
							key={partner.name}
							className="partners__item animate-on-scroll"
							style={{ '--stagger': index + 1 } as CSSProperties}
						>
							<strong>{partner.name}</strong>
							<span>{partner.detail}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default PartnersStrip
