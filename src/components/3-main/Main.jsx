import React, { useState } from 'react'
import './main.css'
import { mainProjects } from './project'
import { AnimatePresence, motion } from 'framer-motion'
function Main() {
  const [category, setCategory] = useState('')
  const [btn, setBtn] = useState(0)
  function handleClick(type) {
    setCategory(type)
  }
  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          className={`${btn === 0 ? 'active' : ''}`}
          onClick={() => {
            setBtn(0)
            handleClick('')
          }}
        >
          All Project
        </button>
        <button
          className={`${btn === 1 ? 'active' : ''}`}
          onClick={() => {
            setBtn(1)
            handleClick('HTML & CSS')
          }}
        >
          HTML & CSS
        </button>
        <button
          className={`${btn === 2 ? 'active' : ''}`}
          onClick={() => {
            setBtn(2)
            handleClick('Javascript')
          }}
        >
          JavaScript
        </button>
        <button
          className={`${btn === 3 ? 'active' : ''}`}
          onClick={() => {
            setBtn(3)
            handleClick('react')
          }}
        >
          React & MUI
        </button>
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {mainProjects
            .filter((item) => item.category.includes(category))
            .map((item) => {
              return (
                <motion.article
                  layout
                  initial={{ transform: 'scale(0)' }}
                  animate={{ transform: 'scale(1)' }}
                  transition={{ type: 'spring', damping: 8, stiffness: 50 }}
                  key={item.id}
                  className="card"
                >
                  <img src={item.image} alt="image-project" />
                  <div className="box">
                    <h1 className="title">{item.name}</h1>
                    <p>{item.description}</p>
                    <div className="flex links">
                      <div className="flex icon-cont">
                        <a className="icon-link" href={item.liveLink}></a>
                        <a className="icon-github" href={item.gitHubLink}></a>
                      </div>
                      <a href={item.gitHubLink} className="more flex">
                        more <span className="icon-arrow_forward"></span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              )
            })}
        </AnimatePresence>
      </section>
    </main>
  )
}

export default Main
