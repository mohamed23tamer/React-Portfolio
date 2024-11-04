import { useEffect, useState } from 'react'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Skill from './components/5-skill/Skill'
import Footer from './components/6-footer/Footer'

function App() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true)
      } else {
        setShowScrollBtn(false)
      }
    })
  }, [])

  const [showScrollBtn, setShowScrollBtn] = useState(false)
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" id="main" />
      <Main />
      <div className="divider" id="contact" />
      <Contact />
      <div className="divider" id="skill" />
      <Skill />
      <div className="divider" />
      <Footer />

      <a
        href="#up"
        style={{ opacity: showScrollBtn ? 1 : 0, transition: '0.3s' }}
      >
        <button className="scrollToUp icon-keyboard_arrow_up"></button>
      </a>
    </div>
  )
}

export default App
