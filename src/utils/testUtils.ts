export const testCredentials = {
    email: "test@example.com",
    password: "123456"
}

export const checkAuthState = () => {
    console.log('Current token:', localStorage.getItem('token'))
    console.log('Is authenticated:', !!localStorage.getItem('token'))
}

export const clearAuthState = () => {
    localStorage.removeItem('token')
    console.log('Auth state cleared')
}