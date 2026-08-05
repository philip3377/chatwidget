import { BubbleChat } from 'flowise-embed-react'

export default function App() {
  return (
    <div className="app-container">
      <h1>Flowise BubbleChat Test</h1>
      <BubbleChat
        chatflowid={import.meta.env.VITE_CHATFLOWID}
        apiHost={import.meta.env.VITE_API_HOST}
      />
    </div>
  )
}
