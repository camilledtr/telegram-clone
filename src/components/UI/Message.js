import styles from "../../style/Message.module.css"

const sentIcon = require("../../assets/sent-icon.svg").default
const readIcon = require("../../assets/read-icon.svg").default

const Message = ({ message, timestamp, sent, read }) => {
  const messageClass = sent ? styles.sent_message : styles.received_message
  const bubbleClass = sent
    ? styles.sent_message__bubble
    : styles.received_message__bubble
  const bubbleTextClass = sent
    ? styles.sent_message__bubble_text
    : styles.received_message__bubble_text
  const bubbleInfo = sent
    ? styles.sent_message__bubble_infos
    : styles.received_message__bubble_infos

  const iconSize = "8px"

  const date = new Date(timestamp)
  const hour = date.getHours()
  const minute = date.getMinutes()
  const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}`

  return (
    <div className={messageClass}>
      <div className={bubbleClass}>
        <div className={bubbleTextClass}>
          <p>{message}</p>
        </div>
        <div className={bubbleInfo}>
          <small className={styles.message__bubble_time}>{formattedTime}</small>
          {sent && !read && (
            <img
              src={sentIcon}
              className={styles.sent_message__bubble_status}
              style={{ width: iconSize }}
            />
          )}
          {sent && read && (
            <img
              src={readIcon}
              className={styles.sent_message__bubble_status}
              style={{ width: iconSize }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Message
