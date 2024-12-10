import { useState } from 'react'

interface TitleProps {
  name?: string
}

const StaticComponent = () => {
  console.log('StaticComponent re-render')
  return (
    <div className="p-4 bg-gray-100 mt-4 rounded-lg shadow-sm">
      Thành phần này sẽ không bị render lại khi count thay đổi
    </div>
  )
}

const DynamicChild = ({ count }: { count: number }) => {
  console.log('DynamicChild re-render')
  return (
    <div className="p-3 bg-blue-100 mt-3 rounded-lg shadow-sm">
      Giá trị count từ parent: {count}
    </div>
  )
}

const Title: React.FC<TitleProps> = ({ name = 'Default' }) => {
  const [count, setCount] = useState(0)

  const onClick = () => {
    setCount(count + 1)
  }
  
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Component: {name}
      </h2>
      
      <div
        onClick={onClick}
        className="p-4 bg-green-100 cursor-pointer hover:bg-green-200 rounded-lg shadow-sm transition-colors duration-200 text-center font-medium"
      >
        Số lần click: {count}
      </div>

      <DynamicChild count={count} />
      <StaticComponent />
    </div>
  )
}

export default Title