import styles from "../../style/Header.module.css"
import Avatar from "../UI/Avatar"
import Button from "../UI/Button"

const phoneIcon = require("../../assets/phone-icon.svg").default
const searchIcon = require("../../assets/search-icon.svg").default
const ellipsisIcon = require("../../assets/ellipsis-icon.svg").default

const Header = ({ name, status }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__infos}>
        <Avatar name={name} size={40} />
        <div className={styles.header__text}>
          <h2 className={styles.header__infos_name}>{name}</h2>
          <p className={styles.header__infos_status}>{status}</p>
        </div>
      </div>
      <div className={styles.header__icons}>
        <Button>
          <img src={phoneIcon} alt="call" />
        </Button>
        <Button>
          <img src={searchIcon} alt="search in the conversation" />
        </Button>
        <Button>
          <img src={ellipsisIcon} alt="more options" />
        </Button>
      </div>
    </div>
  )
}

export default Header
