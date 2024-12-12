import { useCountContext } from '../context/CountContext'
interface TitleProps {
  className?: string
}


const Title: React.FC<TitleProps> = ({ className = '' }) => {
  const { count, increment } = useCountContext()
  
  return (
    <div className= {`p-4 bg-blue-100 rounded ${className}`}>
      <h2 className="text-xl font-bold mb-2"></h2>
      
      <div
        onClick={increment}
        className="p-2 bg-white cursor-pointer hover:bg-gray-50"
      >
        Nhấn để tăng: {count}
      </div>
    </div>
  )
}

export default Title