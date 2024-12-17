import React from 'react'
import Title from './components/Title'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <Title name="React State Demo" />
    </div>
  )
}

export default App