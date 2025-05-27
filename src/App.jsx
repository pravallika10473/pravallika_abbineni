import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="top-right-name">Pravallika Abbineni</div>
      <div className="top-right-location">📍 Salt Lake City, Utah</div>
      
      <div className="body-text">
        <p>Constantly in awe of human collective knowledge.</p>
        <p>I studied artificial intelligence in college, now building <a href="https://www.spot-reader.com/">Spot</a> an Ai powered social e-reader platform. Learning something new every day and writing occasionally about what I find interesting.</p>
      </div>
    </>
  )
}

export default App
