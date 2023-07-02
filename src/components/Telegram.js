import styles from "../style/Telegram.module.css"
import Sidebar from "./Sidebar/Sidebar"
import MainChat from "./MainChat/MainChat"

const Telegram = ({ onToggleDarkMode }) => {
  return (
    <div className={styles.App}>
      <Sidebar />
      <MainChat />
      <button className={styles.darkModeBtn} onClick={onToggleDarkMode} />
    </div>
  )
}

export default Telegram
