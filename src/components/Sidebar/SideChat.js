import styles from "../../style/SideChat.module.css"
import Avatar from "../UI/Avatar"

const SideChat = ({ name, lastMessage }) => {
  return (
    <div className={styles.sideChat}>
      <Avatar name={name} className={styles.sideChat__avatar} />
      <div className={styles.sideChat__content}>
        <h2 className={styles.sideChat__content__name}>{name}</h2>
        <p className={styles.sideChat__content__lastMessage}>{lastMessage}</p>
      </div>
    </div>
  )
}

export default SideChat
