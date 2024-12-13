// File: src/App.tsx
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { store } from './store/store'
import { UserProvider } from './context/UserProvider'
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Title } from './components/Title'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <UserProvider>
        <Router>
          {/* Test Navigation */}
          <nav className="p-4 bg-gray-100">
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/profile" className="mr-4">Profile</Link>
            <Link to="/login">Login</Link>
          </nav>
          
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Title />} />
          </Routes>
        </Router>
      </UserProvider>
    </Provider>
  )
}

export default App