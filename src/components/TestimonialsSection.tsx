import { type CSSProperties } from 'react'

const testimonials = [
	{
		quote:
			'Con Bilotto Studio abbiamo ridisegnato la presenza social in tre mesi: community raddoppiata e conversion rate +62%.',
		name: 'Giulia Mariani',
		title: 'Head of Marketing, Vesta Milano',
	},
	{
		quote:
			'Un partner capace di guidare il team e portare visione: strategia, produzione e performance in un unico flusso.',
		name: 'Davide Ferri',
		title: 'Brand Director, The Harbour',
	},
	{
		quote:
			'Lancio prodotto impeccabile: live shopping, UGC e campagne paid orchestrate con cura. Risultato: sold-out in 48 ore.',
		name: 'Sara Iacoviello',
		title: 'Founder, Bloom Skincare',
	},
]

function TestimonialsSection() {
	return (
		<section id="testimonianze" className="testimonials" aria-labelledby="testimonials-title">
			<div className="section__header animate-on-scroll" style={{ '--stagger': 0 } as CSSProperties}>
				<h2 id="testimonials-title">Le parole di chi lavora con noi</h2>
				<p>
					Partner di lungo periodo e lanci rapidi: la nostra metodologia unisce creativita, dati e governance condivisa con i team
					interni.
				</p>
			</div>

			<div className="testimonials__grid">
				{testimonials.map((testimonial, index) => (
					<figure
						key={testimonial.name}
						className="testimonial-card animate-on-scroll"
						style={{ '--stagger': index + 0.5 } as CSSProperties}
					>
						<blockquote>{testimonial.quote}</blockquote>
						<figcaption>
							<span className="testimonial-card__name">{testimonial.name}</span>
							<span className="testimonial-card__role">{testimonial.title}</span>
						</figcaption>
					</figure>
				))}
			</div>
		</section>
	)
}

export default TestimonialsSection
