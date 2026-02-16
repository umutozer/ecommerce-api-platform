import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'

const Products = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', description: '', price: '', stock: '', categoryId: '' })
  const { user } = useAuth()

  useEffect(() => {
    fetchProducts()
    fetchCategories()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products')
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories')
      setCategories(response.data)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/products', formData)
      setShowModal(false)
      setFormData({ name: '', description: '', price: '', stock: '', categoryId: '' })
      fetchProducts()
    } catch (error) {
      console.error('Error creating product:', error)
    }
  }

  if (loading) return <div className="text-center py-12">Loading products...</div>

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-heading font-bold">Products</h1>
        {user && user.role === 'Admin' && (
          <button onClick={() => setShowModal(true)} className="btn btn-primary">
            Add Product
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="card">
            <h3 className="text-xl font-heading font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary">${product.price}</span>
              <span className="text-sm text-gray-500">Stock: {product.stock}</span>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="card max-w-lg w-full">
            <h2 className="text-2xl font-heading font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Product Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows="3"
              />
              <input
                type="number"
                step="0.01"
                placeholder="Price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Stock"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                required
              />
              <select
                value={formData.categoryId}
                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                required
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <div className="flex gap-2">
                <button type="submit" className="btn btn-primary flex-1">Create</button>
                <button type="button" onClick={() => setShowModal(false)} className="btn btn-secondary flex-1">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products