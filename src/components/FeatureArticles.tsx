import { type CSSProperties } from 'react'

const articles = [
	{
		category: 'Social Media Strategy',
		title: 'Framework editoriale per trasformare i follower in clienti',
		excerpt:
			'Calendari invisibili, rubriche dinamiche e KPI chiari: il metodo che usiamo per dare ritmo ai contenuti e misurare cio che conta.',
		image: '/img/bil2.jpg',
		alt: 'Moodboard digitale con post in evidenza',
		link: '#strategie',
	},
	{
		category: 'Creator Economy',
		title: 'Come progettare collaborazioni win-win con i talent',
		excerpt:
			'Dalla selezione al brief creativo: integriamo creator e ambassador nel funnel mantenendo coerenza con il DNA del brand.',
		image: '/img/bil3.jpg',
		alt: 'Social media manager mentre prepara una campagna',
		link: '#collaborazioni',
	},
	{
		category: 'Performance',
		title: 'Metriche essenziali per campagne paid e organiche',
		excerpt:
			'Una dashboard condivisa per leggere in tempo reale ROAS, sentiment e salute della community senza perdere la visione strategica.',
		image: '/img/bil1.jpg',
		alt: 'Dashboard con performance social e grafici',
		link: '#metriche',
	},
]

function FeatureArticles() {
	return (
		<section id="strategie" className="articles" aria-labelledby="articles-title">
			<div className="section__header animate-on-scroll" style={{ '--stagger': 0 } as CSSProperties}>
				<h2 id="articles-title">Gli ultimi insight dal nostro magazine</h2>
				<p>
					Editoriali e case study per leggere trend, sperimentare format e far crescere community che convertono con naturalezza.
				</p>
			</div>

			<div className="articles__grid">
				{articles.map((article, index) => (
					<article
						key={article.title}
						className="article-card animate-on-scroll"
						style={{ '--stagger': index + 0.6 } as CSSProperties}
					>
						<a href={article.link} className="article-card__link">
							<figure className="article-card__media">
								<img src={article.image} alt={article.alt} loading="lazy" />
							</figure>
							<div className="article-card__content">
								<span className="article-card__category">{article.category}</span>
								<h3>{article.title}</h3>
								<p>{article.excerpt}</p>
								<span className="article-card__cta">Leggi la guida</span>
							</div>
						</a>
					</article>
				))}
			</div>
		</section>
	)
}

export default FeatureArticles
