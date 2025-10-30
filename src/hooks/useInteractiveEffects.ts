import { useEffect } from 'react'

export function useInteractiveEffects() {
	useEffect(() => {
		if (typeof window === 'undefined') return

		const animatedElements = Array.from(document.querySelectorAll<HTMLElement>('.animate-on-scroll'))

		if (!('IntersectionObserver' in window)) {
			animatedElements.forEach((element) => element.classList.add('is-visible'))
			return
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const target = entry.target as HTMLElement
						target.classList.add('is-visible')
						observer.unobserve(target)
					}
				})
			},
			{ threshold: 0.2 },
		)

		animatedElements.forEach((element) => observer.observe(element))

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		if (typeof window === 'undefined') return

		const handleScroll = () => {
			const scrollTop = window.scrollY
			const docHeight = document.documentElement.scrollHeight - window.innerHeight
			const progress = docHeight > 0 ? scrollTop / docHeight : 0
			document.documentElement.style.setProperty('--scroll-progress', Math.min(Math.max(progress, 0), 1).toString())
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		if (typeof window === 'undefined') return

		const mediaQuery = window.matchMedia('(pointer: fine)')
		if (!mediaQuery.matches) return

		const handlePointerMove = (event: PointerEvent) => {
			const x = (event.clientX / window.innerWidth - 0.5) * 2
			const y = (event.clientY / window.innerHeight - 0.5) * 2
			document.documentElement.style.setProperty('--pointer-x', x.toFixed(3))
			document.documentElement.style.setProperty('--pointer-y', y.toFixed(3))
		}

		window.addEventListener('pointermove', handlePointerMove)

		return () => window.removeEventListener('pointermove', handlePointerMove)
	}, [])
}
