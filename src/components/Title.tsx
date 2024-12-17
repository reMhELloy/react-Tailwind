import React, { useState, useRef, useEffect } from 'react'

// Biến toàn cục
let globalCount = 0
// Biến đếm số lần render
let renderCounter = 0

const Title: React.FC = () => {
  // Tăng biến đếm mỗi lần component render
  renderCounter++
  console.log('Component đang render lần thứ:', renderCounter)
 
 // 1. React State
 const [stateCount, setStateCount] = useState<number>(0)
 
 // 2. useRef
 const refCount = useRef<number>(0)
 
 // 3. Biến local 
 let localCount = 0

 // State để cho phép force render
 const [, forceRender] = useState({})

 // Theo dõi các giá trị sau mỗi lần render
 useEffect(() => {
   console.log('Sau khi render, các giá trị là:', {
     stateCount,
     refCount: refCount.current,
     globalCount,
     localCount
   })
 })

 // Handlers không có forceRender
 const handleStateCount = () => {
   setStateCount(prev => {
     console.log('State đang được cập nhật từ', prev, 'thành', prev + 1)
     return prev + 1
   })
 }

 const handleRefCount = () => {
   refCount.current += 1
   console.log('Ref đã tăng thành:', refCount.current, '(UI chưa cập nhật)')
 }

 const handleGlobalCount = () => {
   globalCount += 1
   console.log('Global đã tăng thành:', globalCount, '(UI chưa cập nhật)')
 }

 const handleLocalCount = () => {
   localCount += 1
   console.log('Local đã tăng thành:', localCount, '(sẽ bị reset khi render lại)')
 }

 return (
   <div className="p-6 bg-white rounded-lg shadow-lg space-y-8">
     <div className="bg-gray-100 p-4 rounded-md">
       <h3 className="font-semibold">Demo Cách Hoạt Động Của Các Loại Biến</h3>
       <p className="text-sm text-gray-600 mt-2">
         Mở Console (F12) để theo dõi chi tiết
       </p>
     </div>

     {/* 1. React State */}
     <div className="p-4 bg-blue-50 rounded-md">
       <h3 className="font-semibold mb-2">1. React State</h3>
       <div className="flex items-center space-x-4">
         <button 
           onClick={handleStateCount}
           className="px-4 py-2 bg-blue-500 text-white rounded"
         >
           Tăng State
         </button>
         <span>Giá trị: {stateCount}</span>
       </div>
       <p className="mt-2 text-sm text-gray-600">
         ✅ Tự động re-render khi giá trị thay đổi
       </p>
     </div>

     {/* 2. useRef */}
     <div className="p-4 bg-green-50 rounded-md">
       <h3 className="font-semibold mb-2">2. useRef</h3>
       <div className="flex items-center space-x-4">
         <button 
           onClick={handleRefCount}
           className="px-4 py-2 bg-green-500 text-white rounded"
         >
           Tăng Ref
         </button>
         <span>Giá trị UI: {refCount.current}</span>
       </div>
       <p className="mt-2 text-sm text-gray-600">
         ✅ Giữ được giá trị qua các lần render<br/>
         ❌ UI không tự cập nhật (kiểm tra console)
       </p>
     </div>

     {/* 3. Global Variable */}
     <div className="p-4 bg-yellow-50 rounded-md">
       <h3 className="font-semibold mb-2">3. Biến Global</h3>
       <div className="flex items-center space-x-4">
         <button 
           onClick={handleGlobalCount}
           className="px-4 py-2 bg-yellow-500 text-white rounded"
         >
           Tăng Global
         </button>
         <span>Giá trị UI: {globalCount}</span>
       </div>
       <p className="mt-2 text-sm text-gray-600">
         ✅ Giữ được giá trị xuyên suốt ứng dụng<br/>
         ❌ UI không tự cập nhật (kiểm tra console)
       </p>
     </div>

     {/* 4. Local Variable */}
     <div className="p-4 bg-red-50 rounded-md">
       <h3 className="font-semibold mb-2">4. Biến Local</h3>
       <div className="flex items-center space-x-4">
         <button 
           onClick={handleLocalCount}
           className="px-4 py-2 bg-red-500 text-white rounded"
         >
           Tăng Local
         </button>
         <span>Giá trị UI: {localCount}</span>
       </div>
       <p className="mt-2 text-sm text-gray-600">
         ❌ Giá trị bị reset mỗi lần render<br/>
         ❌ UI không tự cập nhật (kiểm tra console)
       </p>
     </div>

     {/* Force Re-render button */}
     <div className="mt-4">
       <button
         onClick={() => forceRender({})}
         className="px-4 py-2 bg-gray-500 text-white rounded"
       >
         Force Re-render
       </button>
       <p className="mt-2 text-sm text-gray-600">
         Click để xem giá trị UI cập nhật
       </p>
     </div>
   </div>
 )
}

export default Title