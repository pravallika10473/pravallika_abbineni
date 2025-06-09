import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="top-right-name">Pravallika Abbineni</div>
      <div className="top-right-location">Salt Lake City, Utah</div>
      
      <div className="body-text">
        <p>Constantly in awe of human collective knowledge.</p>
        <p>I studied artificial intelligence in college and now building <a href="https://www.spot-reader.com/">Spot</a>, a full-stack learning platform that leverages the collective intelligence of humans and AI to help support deep, self-directed learning. I write occasionally about things I find interesting.</p>
        <br />
      </div>

      <div className="header-text">
        <p>Ideas in Progress:</p>
        <ul>
          <li><a href="https://medium.com/@pravallikaabbineni/how-to-master-anything-68cc58ba30df">How to Learn Anything</a></li>
          <li><a href="https://medium.com/@pravallikaabbineni/life-58e7e19e0001">Genome</a></li>
        </ul>
      </div>
    </>
  )
}

export default App
