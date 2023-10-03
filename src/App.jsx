import { useState } from 'react'
import TextComponent from './components/TextComponent'

const App = () => {
  const [showText, setShowText] = useState(false)

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText)
        }}
      >
        Show Text
      </button>

      {showText && <TextComponent />}
    </div>
  )
}

export default App
