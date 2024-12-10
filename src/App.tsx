import React from 'react'
import logo from './logo.svg'
import './App.css'

// App component serves as the root component of our React application
// It displays a simple landing page with the React logo and a link to the React documentation
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* React logo image that spins using CSS animation */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Instructions for development */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        {/* External link to React documentation */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App