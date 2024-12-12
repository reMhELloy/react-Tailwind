import React from 'react'
import './styles/App.css'
import Title from './components/Title'
import { CountProvider } from './context/CountContext'
import ThumbUp from './components/ThumbUp'
import StaticComponent from './components/StaticComponent'

interface AppProps {
  className?: string
}
const App: React.FC<AppProps> = ({ className = '' }) => {
  return (
    <CountProvider>
      <div className={`p-4 ${className}`}>
        <h1 className="text-2xl font-bold mb-4">Context Demo</h1>
        <Title />
        <ThumbUp />
        <StaticComponent />
      </div>
    </CountProvider>
  )
}

export default App