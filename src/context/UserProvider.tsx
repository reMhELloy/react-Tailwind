import React, { useState, useEffect } from 'react'
import { UserContext } from './UserContext'
import { User } from '../types/user'

interface UserProviderProps {
  children: React.ReactNode
}

// Define default preferences as a constant to ensure consistent initialization
const DEFAULT_PREFERENCES = {
  theme: 'light' as const,
  language: 'vi' as const
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('Current user state:', user)
  }, [user])

  useEffect(() => {
    const checkAuth = async () => {
      // Get stored token from localStorage
      const storedToken = localStorage.getItem('token')
      
      // Only proceed with validation if token exists
      if (storedToken) {
        try {
          setLoading(true)
          const userData = await validateToken(storedToken)
          setUser(userData)
        } catch (error) {
          console.error('Token validation error:', error)
          localStorage.removeItem('token')
        } finally {
          setLoading(false)
        }
      }
    }

    checkAuth()
  }, [])

    const validateToken = async (storedToken: string): Promise<User> => {
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Giả lập việc xác thực token bằng cách kiểm tra xem nó có tồn tại không
        if (!storedToken) {
            throw new Error('Token không hợp lệ')
        }
        
        // Sử dụng token theo cách nào đó - ở đây chúng ta chỉ ghi log
        console.log('Đang xác thực token:', storedToken)
        
        return {
        id: '1',
        username: 'Người dùng Test',
        email: 'test@example.com',
        preferences: DEFAULT_PREFERENCES
        }
    }

  const login = async (credentials: { email: string; password: string }): Promise<void> => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const userData: User = {
        id: "1",
        username: "Test User",
        email: credentials.email,
        preferences: DEFAULT_PREFERENCES
      }
      
      localStorage.setItem('token', 'fake-jwt-token')
      setUser(userData)
      console.log('Login successful:', userData)
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    console.log('Logged out successfully')
  }

  const updateUser = (data: Partial<User>) => {
    console.log('Updating user data:', data)
    
    setUser(prev => {
      if (!prev) {
        return null
      }
      return { ...prev, ...data }
    })
  }

  const updatePreferences = (newPreferences: Partial<User['preferences']>) => {
    console.log('Updating preferences:', newPreferences)
    
    setUser(prev => {
      if (!prev) {
        return null
      }
      
      // Get current preferences or use defaults
      const currentPreferences = prev.preferences || DEFAULT_PREFERENCES
      
      // Create new preferences object with updated or existing values
      const updatedPreferences = {
        theme: newPreferences?.theme || currentPreferences.theme,
        language: newPreferences?.language || currentPreferences.language
      }
      
      // Return new user object with updated preferences
      return {
        ...prev,
        preferences: updatedPreferences
      }
    })
  }

  const isAuthenticated = Boolean(user)

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
    updateUser,
    updatePreferences
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}