import { useState } from "react"
import styles from "../../style/Input.module.css"
import { useSelector } from "react-redux"
import { selectUser } from "../../features/userSlice"
import { db } from "../../firebase"
import firebase from "firebase/compat/app"

const Input = ({ chatId, chatHistory }) => {
  const [input, setInput] = useState("")
  const user = useSelector(selectUser)

  const sendMessage = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()

      const newMessage = {
        id: chatHistory.data.messages.length + 1,
        uid: user.uid,
        content: input,
        timestamp: new Date().toISOString(),
        read: false
      }

      db.collection("chats")
        .doc(chatId)
        .update({
          messages: firebase.firestore.FieldValue.arrayUnion(newMessage)
        })
        .catch((error) => {
          console.error("Error adding message: ", error)
        })

      setInput("")
    }
  }

  return (
    <div className={styles.input}>
      <div className={styles.input__bubble}>
        <input
          className={styles.input__bubble_text}
          type="text"
          placeholder="Type here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => sendMessage(e)}
        />
      </div>
    </div>
  )
}

export default Input
