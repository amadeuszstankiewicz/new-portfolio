import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useRef } from 'react'
import Head from 'next/head'

export default function Home() {
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<main className="relative min-h-screen">
			<Head>
				<title>Portfolio - Amadeusz Stankiewicz</title>
			</Head>
			<Header aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef}/>
			<About aboutRef={aboutRef}/>
			<Projects projectsRef={projectsRef}/>
			<Contact contactRef={contactRef}/>
		</main>
	)
}
