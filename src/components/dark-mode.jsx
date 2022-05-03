import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// :TODO: If there are two instances of the DarkMode in a page(as the case in header.jsx), one instance will not work properly - first click will work, then it wont work.

class DarkMode extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="theme-switcher">
            <input
              type="checkbox"
              onChange={e => {
                toggleTheme(e.target.checked ? 'dark' : 'light')
              }}
              checked={theme === 'dark'}
              hidden
            />
            {theme === 'dark' ? (
              <div>
                <span role="img" aria-label="moon">
                  <img
                    src="https://github.com/squidfunk/mkdocs-material/blob/master/material/.icons/fontawesome/regular/moon.svg"
                    id="dark-mode-toggle"
                    alt="Switch to Light Mode"
                  />
                </span>
              </div>
            ) : (
              <div>
                <span role="img" aria-label="sun">
                  <img
                    src="https://github.com/squidfunk/mkdocs-material/blob/master/material/.icons/fontawesome/regular/sun.svg"
                    id="dark-mode-toggle"
                    alt="Switch to Dark Mode"
                  />
                </span>
              </div>
            )}
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
