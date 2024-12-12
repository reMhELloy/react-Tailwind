import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { increment, decrement } from '../store/counterSlice'

export const Title: React.FC = () => {
  // Lấy state trực tiếp từ store, không cần nhận qua props
  const count = useAppSelector((state) => state.counter.value)
  // Hook để dispatch actions
  const dispatch = useAppDispatch()
  
  return (
    <div className="p-4 bg-blue-100 rounded mb-4">
      <h2 className="text-xl font-bold mb-2">Title Component</h2>
      <div className="flex gap-2">
        <button
          // Dispatch action increment thay vì setState
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-white rounded hover:bg-gray-50"
        >
          Tăng ({count})
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-white rounded hover:bg-gray-50"
        >
          Giảm
        </button>
      </div>
    </div>
  )
}