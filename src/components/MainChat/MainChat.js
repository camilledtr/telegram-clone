import React, { useEffect, useRef } from "react"
import styles from "../../style/MainChat.module.css"
import Header from "./Header"
import Input from "./Input"
import Message from "../UI/Message"

const MainChat = () => {
  const chatHistoryRef = useRef(null)

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight
    }
  }, [])

  return (
    <div className={styles.chat}>
      <Header />
      <div ref={chatHistoryRef} className={styles.chat__history}>
        <Message sent={true} read={true} />
        <Message sent={true} read={true} />
        <Message sent={false} />
        <Message sent={false} />
        <Message sent={true} read={true} />
        <Message sent={false} />
        <Message sent={true} read={true} />
        <Message sent={false} />
        <Message sent={true} read={true} />
        <Message sent={true} read={true} />
        <Message sent={true} read={true} />
        <Message sent={false} />
        <Message sent={false} />
        <Message sent={true} read={true} />
        <Message sent={false} />
        <Message sent={true} read={true} />
        <Message sent={false} />
        <Message sent={true} />
      </div>
      <Input />
    </div>
  )
}

export default MainChat
