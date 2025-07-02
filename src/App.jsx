import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [expandedToggles, setExpandedToggles] = useState({})

  const handleToggle = (key) => {
    setExpandedToggles(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <>
      <div className="top-right-name">
        Pravallika Abbineni
        <a href="https://x.com/pravallikaabbi3?s=21&t=DAmj8HyW6UwxveGc3QVd3A" target="_blank" rel="noopener noreferrer" className="x-logo">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="x-icon">
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </a>
      </div>
      <div className="top-right-location">Salt Lake City, Utah</div>
      
      <div className="body-text">
        <p>Constantly in awe of human collective knowledge.</p>
        <p>I studied artificial intelligence in college and now building <a href="https://www.spot-reader.com/">Spot</a>, a full-stack learning platform that leverages the collective intelligence of humans and AI to help support deep, self-directed learning. I write occasionally about things I find interesting.</p>
        <br />
      </div>
      <p>Ideas in Progress:</p>
      <div className="notion-toggle">
        <button className="toggle-button" onClick={() => handleToggle('bookshelf')}>
          <span className={`toggle-icon ${expandedToggles['bookshelf'] ? 'expanded' : ''}`}>▶</span>
          <span className="toggle-title">Book shelf</span>
        </button>
        {expandedToggles['bookshelf'] && (
          <div className="toggle-content">
            <p>My favourite books, blogs and other resources</p>
            
          </div>
        )}
      </div>
      <div className="notion-toggle">
        <button className="toggle-button" onClick={() => handleToggle('general')}>
          <span className={`toggle-icon ${expandedToggles['general'] ? 'expanded' : ''}`}>▶</span>
          <span className="toggle-title">General</span>
        </button>
        {expandedToggles['general'] && (
          <div className="toggle-content">
            <a href="https://medium.com/@pravallikaabbineni/how-to-master-anything-68cc58ba30df">How to Learn Anything</a>
            <a href="https://medium.com/@pravallikaabbineni/life-58e7e19e0001">Genome</a>
          </div>
        )}
      </div>
    </>
  )
}

export default App
