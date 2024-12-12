import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    value: number
}
// Định nghĩa state ban đầu cho counter
const initialState: CounterState = {
    value: 0
}

// Tạo slice cho counter với reducers để thay đổi state
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    // Action tăng giá trị - thay vì useState, ta dispatch action này
        increment: (state) => {
            state.value += 1
        },
    // Action giảm giá trị
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer