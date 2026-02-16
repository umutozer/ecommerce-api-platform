import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      fetchOrders()
    }
  }, [user])

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders')
      setOrders(response.data)
    } catch (error) {
      console.error('Error fetching orders:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="text-center py-12">Loading orders...</div>

  return (
    <div>
      <h1 className="text-4xl font-heading font-bold mb-8">My Orders</h1>

      {orders.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-gray-600 text-lg">No orders yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-heading font-bold">Order #{order.id}</h3>
                  <p className="text-sm text-gray-600">{new Date(order.orderDate).toLocaleDateString()}</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {order.status}
                </span>
              </div>
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-primary">Total: ${order.totalAmount}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders