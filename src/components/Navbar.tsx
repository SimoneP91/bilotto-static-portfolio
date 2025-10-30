import { useState } from 'react'

const links = [
	{ href: '#strategie', label: 'Magazine' },
	{ href: '#community-blueprint', label: 'Risorse' },
	{ href: '#chi-siamo', label: 'Studio' },
	{ href: '#servizi', label: 'Servizi' },
	{ href: '#testimonianze', label: 'Case study' },
	{ href: '#contact', label: 'Newsletter' },
]

function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen((value) => !value)
	}

	const handleNavigate = () => {
		setIsOpen(false)
	}

	return (
		<header className="navbar" aria-label="Navigazione principale">
			<div className="navbar__inner">
				<a className="navbar__brand" href="#home" onClick={handleNavigate}>
					Bilotto Studio
				</a>

				<button
					type="button"
					className="navbar__toggle"
					aria-label={isOpen ? 'Chiudi il menu' : 'Apri il menu'}
					aria-expanded={isOpen}
					onClick={toggleMenu}
				>
					<span aria-hidden="true" className="navbar__toggle-line" />
					<span aria-hidden="true" className="navbar__toggle-line" />
					<span aria-hidden="true" className="navbar__toggle-line" />
				</button>

				<nav className={`navbar__menu${isOpen ? ' navbar__menu--open' : ''}`} aria-label="Sezioni della pagina">
					{links.map((link) => (
						<a key={link.href} className="navbar__link" href={link.href} onClick={handleNavigate}>
							{link.label}
						</a>
					))}
				</nav>
			</div>
		</header>
	)
}

export default Navbar
