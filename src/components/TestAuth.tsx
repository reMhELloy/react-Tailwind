import { useUser } from '../context/UserProvider'

export const TestAuth = () => {
  const { user, login, logout, updatePreferences, updateUser, loading } = useUser()

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Test Authentication</h2>
      
      {/* Display current state */}
      <div className="mb-4 p-2 bg-gray-100 rounded">
        <pre>{JSON.stringify({ user, loading }, null, 2)}</pre>
      </div>

      {/* Test buttons */}
      <div className="space-y-2">
        <button 
          onClick={() => login({ email: 'test@example.com', password: '123456' })}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          Test Login
        </button>

        <button 
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded ml-2"
        >
          Test Logout
        </button>

        <button 
          onClick={() => updatePreferences({ theme: 'dark', language: 'en' })}
          className="bg-green-500 text-white px-4 py-2 rounded ml-2"
        >
          Test Update Theme
        </button>
      </div>
    </div>
  )
}
