import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="bg-primary text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-heading font-bold">
            ECommerce API
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <Link to="/categories" className="hover:text-accent transition-colors">Categories</Link>
            {user && <Link to="/orders" className="hover:text-accent transition-colors">Orders</Link>}
            <Link to="/api-docs" className="hover:text-accent transition-colors">API Docs</Link>
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm">Hello, {user.fullName}</span>
                <button onClick={handleLogout} className="btn btn-secondary text-sm">Logout</button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to="/login" className="btn btn-secondary text-sm">Login</Link>
                <Link to="/register" className="btn bg-white text-primary text-sm">Register</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header