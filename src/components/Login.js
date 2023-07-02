import styles from "../style/Login.module.css"
import { auth, provider } from "../firebase"

const Login = () => {
  const logIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message))
  }

  return (
    <div className={styles.login}>
      <div className={styles.login__telegram}>
        <img
          src={process.env.PUBLIC_URL + "/telegram-icon.svg"}
          alt="Telegram logo"
          className={styles.login__telegram_logo}
        />
        <h1 className={styles.login__telegram_title}>Telegram</h1>
      </div>
      <button className={styles.login__form_button} onClick={logIn}>
        Log in
      </button>
    </div>
  )
}

export default Login
