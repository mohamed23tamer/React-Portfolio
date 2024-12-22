import { useEffect, useState } from 'react'
import './header.css'
function Header() {
  const [showModel, setShowModel] = useState(false)
  const [theme, setTheme] = useState(
    localStorage.getItem('currentMode') ?? 'dark'
  )

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.remove('light')
      document.body.classList.add(theme)
    } else {
      document.body.classList.remove('dark')
      document.body.classList.add(theme)
    }
  }, [theme])

  const handleClosePopup = function () {
    setShowModel(false)
  }

  return (
    <header className="flex">
      <button
        className="menu icon-menu"
        onClick={() => {
          setShowModel(true)
        }}
      />

      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#hero">About</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#main">Projects</a>
          </li>
          <li>
            <a href="#contact">Contacting</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          // store to local storage
          localStorage.setItem(
            'currentMode',
            theme === 'light' ? 'dark' : 'light'
          )
          // set to theme state
          setTheme(localStorage.getItem('currentMode'))
        }}
        className="mode flex"
      >
        <span
          className={`${theme === 'dark' ? 'icon-moon-o' : 'icon-sun'}`}
        ></span>
      </button>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button className="icon-close" onClick={handleClosePopup} />
            </li>
            <li>
              <a onClick={handleClosePopup} href="#hero">
                About
              </a>
            </li>
            <li>
              <a onClick={handleClosePopup} href="#formContact">
                Contact
              </a>
            </li>
            <li>
              <a onClick={handleClosePopup} href="#main">
                Projects
              </a>
            </li>
            <li>
              <a onClick={handleClosePopup} href="#contact">
                Speaking
              </a>
            </li>
            <li>
              <a onClick={handleClosePopup} href="#skill">
                Skills
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
