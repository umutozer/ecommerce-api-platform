import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="space-y-12">
      <section className="text-center py-16">
        <h1 className="text-5xl font-heading font-bold text-primary mb-4">
          ECommerce API Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Powerful and documented API for building e-commerce and inventory management applications quickly and efficiently
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/api-docs" className="btn btn-primary text-lg">View API Documentation</Link>
          <Link to="/products" className="btn btn-secondary text-lg">Explore Products</Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="card text-center">
          <div className="text-4xl mb-4">👥</div>
          <h3 className="text-xl font-heading font-bold mb-2">User Management</h3>
          <p className="text-gray-600">Complete authentication and user management system with JWT tokens</p>
        </div>
        <div className="card text-center">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-xl font-heading font-bold mb-2">Product Catalog</h3>
          <p className="text-gray-600">Manage products, categories, and inventory with powerful APIs</p>
        </div>
        <div className="card text-center">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-heading font-bold mb-2">Order Management</h3>
          <p className="text-gray-600">Track orders, process payments, and manage fulfillment</p>
        </div>
      </section>

      <section className="card bg-gradient-to-r from-primary to-secondary text-white">
        <h2 className="text-3xl font-heading font-bold mb-4">Key Features</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="flex items-center gap-2">✓ RESTful API Design</li>
          <li className="flex items-center gap-2">✓ JWT Authentication</li>
          <li className="flex items-center gap-2">✓ Swagger Documentation</li>
          <li className="flex items-center gap-2">✓ PostgreSQL Database</li>
          <li className="flex items-center gap-2">✓ Docker Support</li>
          <li className="flex items-center gap-2">✓ Role-based Authorization</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-heading font-bold mb-6">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-6 py-3 bg-primary text-white rounded-lg font-medium">ASP.NET Core</span>
          <span className="px-6 py-3 bg-secondary text-white rounded-lg font-medium">PostgreSQL</span>
          <span className="px-6 py-3 bg-accent text-dark rounded-lg font-medium">React + Vite</span>
          <span className="px-6 py-3 bg-dark text-white rounded-lg font-medium">Docker</span>
          <span className="px-6 py-3 bg-primary text-white rounded-lg font-medium">Tailwind CSS</span>
        </div>
      </section>
    </div>
  )
}

export default Home