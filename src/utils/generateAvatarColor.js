const gradientColors = [
  { 0: "#f093fb", 1: "#f5576c" },
  { 0: "#4facfe", 1: "#00f2fe" },
  { 0: "#43e97b", 1: "#38f9d7" },
  { 0: "#fa709a", 1: "#fee140" },
  { 0: "#f5d020", 1: "#f53803" },
  { 0: "#f12711", 1: "#f5af19" },
  { 0: "#ff0844", 1: "#ffb199" }
]

export const generateAvatarColor = (name) => {
  // Calculate the hash code from the name
  let hashCode = 0
  for (let i = 0; i < name.length; i++) {
    hashCode = name.charCodeAt(i) + ((hashCode << 5) - hashCode)
  }

  // Get the index of the gradient color based on the hash code
  const index = Math.abs(hashCode) % gradientColors.length

  // Get the gradient color from the gradientColors array
  const gradientColor = gradientColors[index]

  return `linear-gradient(120deg, ${gradientColor[0]}, ${gradientColor[1]})`
}
