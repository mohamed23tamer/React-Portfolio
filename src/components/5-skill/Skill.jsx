import './skill.css'
import Lottie from 'lottie-react'
import jsAnimation from '../../animation/javascript.json'
import htmlAnimation from '../../animation/html.json'
import CSSAnimation from '../../animation/css.json'
import reactAnimation from '../../animation/react.json'
import gitAnimation from '../../animation/github.json'

function Skill() {
  return (
    <section className="skill">
      <h1 className="title">My Skills</h1>
      <div className="flex">
        <Lottie animationData={jsAnimation} className="animation" />
        <Lottie animationData={htmlAnimation} className="animation" />
        <Lottie animationData={CSSAnimation} className="animation" />
        <Lottie animationData={reactAnimation} className="animation" />
        <Lottie animationData={gitAnimation} className="animation" />
      </div>
    </section>
  )
}

export default Skill
