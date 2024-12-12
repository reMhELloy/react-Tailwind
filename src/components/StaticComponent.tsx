interface StaticComponentProps {
    className?: string
}
const StaticComponent: React.FC<StaticComponentProps> = ({ className = '' }) => {
    return (
        <div className={`p-4 mt-4 bg-gray-100 rounded ${className}`}>
            <h2 className="text-xl font-bold mb-2">Static Component 💖</h2>
            <div>Component này sẽ không re-render khi count thay đổi</div>
        </div>
    )
}

export default StaticComponent