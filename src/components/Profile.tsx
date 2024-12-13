import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

export const Profile: React.FC = () => {
  const { user, updateUser, updatePreferences, logout } = useContext(UserContext)
  const [isEditing, setIsEditing] = useState(false)
  const [username, setUsername] = useState(user?.username || '')

  const handleUpdateProfile = () => {
    updateUser({ username })
    setIsEditing(false)
  }

  const handleThemeChange = (theme: 'light' | 'dark') => {
    if (user?.preferences) {
      updatePreferences({
        ...user.preferences,
        theme
      })
    }
  }

  const handleLanguageChange = (language: 'en' | 'vi') => {
    if (user?.preferences) {
      updatePreferences({
        ...user.preferences,
        language
      })
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="space-y-6">
          {/* User Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">User Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                {isEditing ? (
                  <div className="mt-1 flex gap-2">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    <button
                      onClick={handleUpdateProfile}
                      className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="mt-1 flex justify-between items-center">
                    <p className="text-gray-900">{user?.username}</p>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-gray-900">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Preferences</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <select
                  value={user?.preferences?.theme}
                  onChange={(e) => handleThemeChange(e.target.value as 'light' | 'dark')}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={user?.preferences?.language}
                  onChange={(e) => handleLanguageChange(e.target.value as 'en' | 'vi')}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                >
                  <option value="en">English</option>
                  <option value="vi">Tiếng Việt</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}