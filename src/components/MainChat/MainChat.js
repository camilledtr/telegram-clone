import React from "react"
import styles from "../../style/MainChat.module.css"
import MainChatContent from "./MainChatContent"

const MainChat = ({ isChatOpen, chatId }) => {
  return (
    <div className={styles.chat}>
      {isChatOpen ? <MainChatContent chatId={chatId} /> : null}
    </div>
  )
}

export default MainChat
