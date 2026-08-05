import { BubbleChat } from 'flowise-embed-react'

export default function App() {
  return (
    <div className="app-container">
      <h1>Flowise BubbleChat Test</h1>
      <BubbleChat
        chatflowid="ed240bf9-1470-445c-80e5-ea44a5d5fc26"
        apiHost="http://68.183.224.154:7000"
      />
    </div>
  )
}
