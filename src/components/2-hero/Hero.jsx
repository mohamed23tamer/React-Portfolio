import React, { useRef } from 'react'
import './hero.css'
import Lottie from 'lottie-react'
import homeAnimation from '../../animation/home.json'
import { motion } from 'framer-motion'
function Hero() {
  const lottieRef = useRef()
  return (
    <section className="hero flex" id="hero">
      <div className="left-section">
        <div className="avatar-parent flex">
          <motion.img
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: 'scale(1.1)' }}
            transition={{ damping: 7, type: 'spring', stiffness: 100 }}
            src="/images/me.jpeg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Front-end Developer, React Developer
        </motion.h1>
        <p>
          I'am Mohamed Tamer, Highly skilled Front-End Developer with experience
          in building responsive, user-friendly web applications. Proficient in
          HTML, CSS, JavaScript, React.js, and familiar with modern frameworks
          like Redux and Next.js.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.7)
          }}
          className="animation"
          animationData={homeAnimation}
        />
      </div>
    </section>
  )
}

export default Hero
