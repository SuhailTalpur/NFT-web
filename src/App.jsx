import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Vision from './components/vision'
import Roadmap from './components/roadmap'
import Holders from './components/holders'
import Footer from './components/footer'
import Story from './components/story'
import Ecosystem from './components/ecosystem'
import Faq from './components/faq'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Enable smooth scrolling for anchor links
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <>
      {/* Home section (target: #home) */}
      <section id="home">
        <Header />
      </section>

      {/* Story section (target: #story) */}
      <section id="">
        <Story />
      </section>

      {/* Ecosystem section (target: #ecosystem) */}
      <section id="">
        <Ecosystem />
      </section>

      {/* Vision section (target: #vision) */}
      <section id="vision">
        <Vision />
      </section>

      {/* Roadmap section (target: #roadmap) */}
      <section id="roadmap">
        <Roadmap />
      </section>

      {/* Benefits section (target: #benefits) — mapped to Holders component */}
        <section id="benefits">
          <Holders />
        </section>

      {/* FAQ section (target: #faq) */}
      <section id="faq">
        <Faq />
      </section>

      <Footer />
    </>
  )
}

export default App
