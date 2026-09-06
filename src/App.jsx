import Header from './components/Header'
import Hero from './components/Hero'
import TechSlider from './components/TechSlider'
import About from './components/About'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import GitHubActivity from './components/GitHubActivity'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechSlider />
        <About />
        <Certifications />
        <TechSlider />
        <Skills />
        <Projects />
        <Experience />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
