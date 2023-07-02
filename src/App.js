import React, { useState, useEffect } from "react"
import Telegram from "./components/Telegram"
import "./theme/colors.css"
import "./theme/main.css"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    )
  }, [isDarkMode])

  return <Telegram onToggleDarkMode={toggleDarkMode} />
}

export default App
