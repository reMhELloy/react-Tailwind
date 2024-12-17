import React, { useState } from 'react'

interface TitleProps {
  name: string
}

const Title: React.FC<TitleProps> = ({ name }) => {
  // Khởi tạo state count với giá trị ban đầu là 0
  const [count, setCount] = useState<number>(0)
  
  // Log để theo dõi giá trị count khi click
  const handleIncrement = () => {
    console.log("clicked, current count:", count)
    setCount(count + 1)
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleIncrement}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            +
          </button>
          <span className="text-xl">Count: {count}</span>
        </div>

        {/* Hiển thị timeline của state */}
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">Timeline:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Current state value: {count}</li>
            <li>Next state value will be: {count + 1}</li>
            <li>Component will re-render after setCount({count + 1})</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Title