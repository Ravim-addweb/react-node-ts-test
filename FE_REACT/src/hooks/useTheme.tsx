import { useEffect, useState, useContext } from 'react'
import Context from 'providers/themeProvider';

export default () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return {
    theme,
    toggleTheme,
  }
}