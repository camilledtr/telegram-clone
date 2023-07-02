import { useEffect, useState } from "react"
import SideChat from "./SideChat"
import styles from "../../style/Sidebar.module.css"
import Button from "../UI/Button"
import { auth } from "../../firebase"
import { useSelector } from "react-redux"
import { selectUser } from "../../features/userSlice"
import { db } from "../../firebase"
const writeIcon = require("../../assets/pencil-white-64.ico")

const Sidebar = ({ onOpenChat }) => {
  const user = useSelector(selectUser)
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

  const addChat = () => {
    const chatName = prompt("Please enter a chat name")
    if (chatName) {
      db.collection("chats")
        .add({
          name: chatName,
          messages: [
            {
              content: "You just started this conversation.",
              timestamp: new Date().toISOString(),
              uid: user.uid,
              read: false
            }
          ]
        })
        .then((docRef) => {
          console.log("New chat added with ID:", docRef.id)
        })
        .catch((error) => {
          console.error("Error adding chat:", error)
        })
    }
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header} onClick={() => auth.signOut()}>
        <Button className={styles.sidebar__toggle}>
          <img src={user.photo} alt="user photo" />
        </Button>
        <input className={styles.sidebar__search} placeholder="Search"></input>
      </div>
      <div className={styles.sidebar__sideChats}>
        {chatsHistory.length > 0 &&
          chatsHistory
            .sort((a, b) => {
              const lastMessageA = a.data.messages[a.data.messages.length - 1]
              const lastMessageB = b.data.messages[b.data.messages.length - 1]
              return lastMessageB.timestamp.localeCompare(
                lastMessageA.timestamp
              )
            })
            .map(({ id, data: { name, messages } }) => (
              <SideChat
                key={id}
                id={id}
                name={name}
                lastMessage={messages[messages.length - 1].content}
                onOpenChat={onOpenChat}
              />
            ))}
        {chatsHistory.length === 0 && (
          <p className={styles.sidebar__empty}>No chats yet.</p>
        )}
      </div>
      <button className={styles.sidebar__cta} onClick={addChat}>
        <img
          className={styles.sidebar__cta__icon}
          src={writeIcon}
          alt="Write a new message"
        />
      </button>
    </div>
  )
}

export default Sidebar
