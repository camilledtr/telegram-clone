import styles from "../../style/Input.module.css"

const Input = () => {
  return (
    <div className={styles.input}>
      <div className={styles.input__bubble}>
        <input
          className={styles.input__bubble_text}
          type="text"
          placeholder="Type here..."
        />
      </div>
    </div>
  )
}

export default Input
