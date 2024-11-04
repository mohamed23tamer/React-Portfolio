import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#hero">About</a>
        </li>
        <li>
          <a href="#main">Projects</a>
        </li>
        <li>
          <a href="#contact">Speaking</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>
      </ul>

      <p>© 2024 Mohamed Tamer all Rights reserved</p>
    </footer>
  )
}
export default Footer
