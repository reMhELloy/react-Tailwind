export interface User {
    id?: string
    username?: string
    email?: string
    avatar?: string
    isAdmin?: boolean
    token?: string
    preferences?: {
    theme: 'light' | 'dark'
    language: 'en' | 'vi'
    }
}

export interface UserContextType {
    // State
    user: User | null
    isAuthenticated: boolean
    loading: boolean
    
    // Actions
    login: (credentials: { email: string; password: string }) => Promise<void>
    logout: () => void
    updateUser: (data: Partial<User>) => void
    updatePreferences: (preferences: User['preferences']) => void
}
