import styles from "../../style/Avatar.module.css"
import { generateAvatarColor } from "../../utils/generateAvatarColor"

const Avatar = ({ name, size, className }) => {
  const background = generateAvatarColor(name)
  const useSize = size ?? 50

  return (
    <div
      className={`${styles.avatar} ${className}`}
      style={{ background, height: useSize, width: useSize }}
    >
      <h2 className={styles.avatar__name} style={{ fontSize: 0.5 * useSize }}>
        {name[0].toUpperCase()}
      </h2>
    </div>
  )
}

export default Avatar
