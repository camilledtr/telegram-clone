import React, { useEffect, useRef, useState } from "react"
import Header from "./Header"
import Input from "./Input"
import Message from "../UI/Message"
import { db } from "../../firebase"
import styles from "../../style/MainChat.module.css"
import { useSelector } from "react-redux"
import { selectUser } from "../../features/userSlice"

const MainChatContent = ({ chatId }) => {
  const chatHistoryRef = useRef(null)
  const user = useSelector(selectUser)

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight
    }
  }, [chatHistoryRef])

  const [chatHistory, setChatHistory] = useState(null)

  const [chatsHistory, setChatsHistory] = useState([])

  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) => {
      setChatsHistory(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    setChatHistory(chatsHistory.find((chat) => chat.id === chatId))
  }, [chatsHistory, chatId])

  return (
    <>
      {!!chatHistory && (
        <>
          <Header name={chatHistory.data.name} status={"online"} />
          <div ref={chatHistoryRef} className={styles.chat__history}>
            {chatHistory.data.messages.map((message, index) => (
              <Message
                key={index}
                message={message.content}
                read={message.read}
                sent={message.uid === user.uid}
                timestamp={message.timestamp}
              />
            ))}
          </div>
          <Input chatId={chatId} chatHistory={chatHistory} />
        </>
      )}
    </>
  )
}

export default MainChatContent
