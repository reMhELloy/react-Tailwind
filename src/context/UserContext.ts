import { createContext } from 'react'
import { UserContextType } from '../types/user'

// Giá trị mặc định cho context
const defaultUserContext: UserContextType = {
  // State mặc định
  user: null,
  isAuthenticated: false,
  loading: false,

  // Các hàm mặc định
  login: async () => {
    console.warn('UserContext: login function not implemented')
  },
  logout: () => {
    console.warn('UserContext: logout function not implemented')
  },
  updateUser: () => {
    console.warn('UserContext: updateUser function not implemented')
  },
  updatePreferences: () => {
    console.warn('UserContext: updatePreferences function not implemented')
  }
}

// Tạo và export context
export const UserContext = createContext<UserContextType>(defaultUserContext)
