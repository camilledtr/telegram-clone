import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/userSlice"

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export const messageHistory = [
  {
    id: 1,
    sent: true,
    message: "Hello, how are you?",
    timestamp: "2021-05-01T12:00:00.000Z",
    read: true
  },
  {
    id: 2,
    sent: false,
    message: "I'm fine, thanks!",
    timestamp: "2021-05-01T12:01:00.000Z"
  },
  {
    id: 3,
    sent: true,
    message: "Good to hear!",
    timestamp: "2021-05-01T12:02:00.000Z",
    read: true
  },
  {
    id: 4,
    sent: false,
    message: "How about you?",
    timestamp: "2021-05-01T12:03:00.000Z"
  },
  {
    id: 5,
    sent: true,
    message: "I'm doing well, thanks!",
    timestamp: "2021-05-01T12:04:00.000Z",
    read: false
  }
]
