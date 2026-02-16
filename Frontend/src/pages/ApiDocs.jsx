import React from 'react'

const ApiDocs = () => {
  const endpoints = [
    {
      category: 'Authentication',
      items: [
        { method: 'POST', path: '/api/auth/register', desc: 'Register a new user' },
        { method: 'POST', path: '/api/auth/login', desc: 'Login and get JWT token' }
      ]
    },
    {
      category: 'Products',
      items: [
        { method: 'GET', path: '/api/products', desc: 'Get all products' },
        { method: 'GET', path: '/api/products/{id}', desc: 'Get product by ID' },
        { method: 'POST', path: '/api/products', desc: 'Create new product (Admin)' },
        { method: 'PUT', path: '/api/products/{id}', desc: 'Update product (Admin)' },
        { method: 'DELETE', path: '/api/products/{id}', desc: 'Delete product (Admin)' }
      ]
    },
    {
      category: 'Categories',
      items: [
        { method: 'GET', path: '/api/categories', desc: 'Get all categories' },
        { method: 'POST', path: '/api/categories', desc: 'Create category (Admin)' }
      ]
    },
    {
      category: 'Orders',
      items: [
        { method: 'GET', path: '/api/orders', desc: 'Get user orders' },
        { method: 'POST', path: '/api/orders', desc: 'Create new order' },
        { method: 'PUT', path: '/api/orders/{id}/status', desc: 'Update order status (Admin)' }
      ]
    }
  ]

  const getMethodColor = (method) => {
    switch(method) {
      case 'GET': return 'bg-green-500'
      case 'POST': return 'bg-blue-500'
      case 'PUT': return 'bg-yellow-500'
      case 'DELETE': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-heading font-bold mb-4">API Documentation</h1>
        <p className="text-gray-600 text-lg">Complete REST API reference for ECommerce Platform</p>
      </div>

      <div className="card mb-8 bg-gradient-to-r from-primary to-secondary text-white">
        <h2 className="text-2xl font-heading font-bold mb-4">Base URL</h2>
        <code className="bg-white bg-opacity-20 px-4 py-2 rounded block">http://localhost:5000/api</code>
        <p className="mt-4">All endpoints require authentication except /auth/* routes</p>
      </div>

      <div className="space-y-8">
        {endpoints.map((section, idx) => (
          <div key={idx} className="card">
            <h2 className="text-2xl font-heading font-bold mb-4">{section.category}</h2>
            <div className="space-y-3">
              {section.items.map((endpoint, eidx) => (
                <div key={eidx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className={`${getMethodColor(endpoint.method)} text-white px-3 py-1 rounded font-medium text-sm`}>
                    {endpoint.method}
                  </span>
                  <code className="flex-1 font-mono text-sm">{endpoint.path}</code>
                  <span className="text-gray-600 text-sm">{endpoint.desc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="card mt-8 bg-accent">
        <h2 className="text-2xl font-heading font-bold mb-4">Authentication</h2>
        <p className="mb-4">Include JWT token in Authorization header:</p>
        <code className="bg-white bg-opacity-50 px-4 py-2 rounded block">
          Authorization: Bearer YOUR_JWT_TOKEN
        </code>
      </div>
    </div>
  )
}

export default ApiDocs