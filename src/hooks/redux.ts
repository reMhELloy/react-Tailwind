// Custom hooks với TypeScript để truy cập store dễ dàng
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'

// Hook để đọc state từ store
export const useAppDispatch: () => AppDispatch = useDispatch
// Hook để đọc state từ store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector