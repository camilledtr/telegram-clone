import SideChat from "./SideChat"
import styles from "../../style/Sidebar.module.css"
import Button from "../UI/Button"
const writeIcon = require("../../assets/pencil-white-64.ico")

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <Button className={styles.sidebar__toggle}>
          <div className={styles.sidebar__toggle_line}></div>
          <div className={styles.sidebar__toggle_line}></div>
          <div className={styles.sidebar__toggle_line}></div>
        </Button>
        <input className={styles.sidebar__search} placeholder="Search"></input>
      </div>
      <div className={styles.sidebar__sideChats}>
        <SideChat
          name={"Valentin"}
          lastMessage={"Valentin a rejoint Telegram."}
        />
        <SideChat name={"Adrien B"} lastMessage={"Adrien a envoyé un GIF."} />
        <SideChat
          name={"Groupe"}
          lastMessage={
            "Réagissez avec les 🔥 si vous voulez plus de posts sur la création (et la monétisation) d'audiences grâce à l'IA."
          }
        />
        <SideChat
          name={"Papa"}
          lastMessage={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          }
        />
        <SideChat name={"Julien"} lastMessage={"Julien a rejoint Telegram."} />
        <SideChat
          name={"Marie T"}
          lastMessage={
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          }
        />
        <SideChat
          name={"Groupe"}
          lastMessage={
            "Réagissez avec les 🔥 si vous voulez plus de posts sur la création (et la monétisation) d'audiences grâce à l'IA."
          }
        />
        <SideChat
          name={"Papa"}
          lastMessage={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          }
        />
        <SideChat
          name={"Louise C"}
          lastMessage={"Louise a rejoint Telegram."}
        />
        <SideChat name={"Adrien B"} lastMessage={"Adrien a envoyé un GIF."} />
        <SideChat
          name={"Groupe"}
          lastMessage={
            "Réagissez avec les 🔥 si vous voulez plus de posts sur la création (et la monétisation) d'audiences grâce à l'IA."
          }
        />
        <SideChat
          name={"Papa"}
          lastMessage={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempors"
          }
        />
      </div>
      <div className={styles.sidebar__cta}>
        <img
          className={styles.sidebar__cta__icon}
          src={writeIcon}
          alt="Write a new message"
        />
      </div>
    </div>
  )
}

export default Sidebar
