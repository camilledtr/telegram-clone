import React from "react"
import { auth } from "../../firebase"
import styles from "../../style/Logout.module.css"

const Logout = () => {
  return (
    <div className={styles.logout} onClick={() => auth.signOut()}>
      <ul>
        <li className={styles.logoutText}>Logout</li>
      </ul>
    </div>
  )
}

export default Logout
