import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  )
}

export default App 