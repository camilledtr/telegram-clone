import React, { useState, useEffect } from "react"
import Telegram from "./components/Telegram"
import Login from "./components/Login"
import "./theme/colors.css"
import "./theme/main.css"
import { useSelector, useDispatch } from "react-redux"
import { selectUser, login, logout } from "./features/userSlice"
import { auth } from "./firebase"

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

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

  return (
    <>{user ? <Telegram onToggleDarkMode={toggleDarkMode} /> : <Login />}</>
  )
}

export default App
