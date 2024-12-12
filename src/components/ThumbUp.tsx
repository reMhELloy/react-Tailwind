import { useCountContext } from "../context/CountContext"

interface ThumbUpProps{
    className?: string
}
const ThumbUp: React.FC<ThumbUpProps> = ({ className = '' }) => {
    const { count } = useCountContext()
    return (
        <div className={`p-4 mt-4 bg-green-100 rounded ${className}`}>
            <h2 className="text-xl font-bold mb-2">ThumbUp Component</h2>
            <div className="p-2 bg-white">
                {count > 5 ? (
                    <div className="text-green-600 font-bold">
                        Tuyệt vời! 👍
                    </div>
                ) : (
                    <div className="text-gray-500">
                        Tiếp tục nhấp! (còn {6 - count} lần nữa)
                    </div>
                )}
            </div>
        </div>
    )
}
export default ThumbUp