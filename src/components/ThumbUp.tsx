import React from 'react'
import { useAppSelector } from '../hooks/redux'

export const ThumbUp: React.FC = () => {
  // Component khác cũng có thể truy cập trực tiếp state từ store
  // Không cần nhận count qua props từ component cha
  const count = useAppSelector((state) => state.counter.value)

  return (
    <div className="p-4 bg-green-100 rounded">
      <h2 className="text-xl font-bold mb-2">ThumbUp Component</h2>
      <div className="p-2 bg-white rounded">
        {count > 5 ? (
          <span className="text-green-600">Tuyệt vời! 👍</span>
        ) : (
          <span className="text-gray-500">
            Cần thêm {6 - count} lần nữa
          </span>
        )}
      </div>
    </div>
  )
}