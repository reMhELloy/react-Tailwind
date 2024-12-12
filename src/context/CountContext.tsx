import { createContext, type PropsWithChildren, useContext, useState } from "react"

interface CountProviderProps extends PropsWithChildren {}
interface CountContextInterface {
    count: number
    setCount: (count: number) => void
    increment: () => void
}

const CountContext = createContext<CountContextInterface | undefined>(undefined)

const useCountContext = () => {
    const context = useContext(CountContext)
    console.log("🚀 ~ useCountContext ~ context:", context)
    if (!context) {
        throw new Error('useCountContext phải được sử dụng trong CountProvider')
    }
    return context
}

// Component Provider - Cung cấp giá trị context cho toàn bộ ứng dụng
// Nhận vào children props để có thể wrap các components con
const CountProvider = ({ children }: CountProviderProps) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }
    
    // Trả về Provider bao bọc children
    // value prop chứa tất cả các giá trị và hàm cần chia sẻ
    return (
        <CountContext.Provider value={{ count, setCount, increment}}>
            {children}
        </CountContext.Provider>
    )
}

export { CountProvider, useCountContext}