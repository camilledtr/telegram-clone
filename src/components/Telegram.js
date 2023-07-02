import { useState } from "react"
import styles from "../style/Telegram.module.css"
import Sidebar from "./Sidebar/Sidebar"
import MainChat from "./MainChat/MainChat"

const Telegram = ({ onToggleDarkMode }) => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatId, setChatId] = useState(null)

  const handleOpenChat = (id) => {
    setIsChatOpen(true)
    setChatId(id)
  }

  return (
    <div className={styles.App}>
      <Sidebar onOpenChat={handleOpenChat} />
      <MainChat isChatOpen={isChatOpen} chatId={chatId} />
      <button className={styles.darkModeBtn} onClick={onToggleDarkMode} />
    </div>
  )
}

export default Telegram
