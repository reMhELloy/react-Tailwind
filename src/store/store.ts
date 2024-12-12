import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counterSlice'

// Cấu hình Redux store - nơi lưu trữ state tập trung
export const store = configureStore({
    reducer: {
        counter: counterReducer // Register counter reducer vào store
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch