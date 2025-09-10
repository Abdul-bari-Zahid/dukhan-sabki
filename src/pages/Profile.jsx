import React from 'react'
import { Link } from 'react-router-dom'

const Profile = ({ user }) => {
  if (!user) {
    return <div className="text-center py-10">Please signup to view your profile.</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Welcome, {user.name}</h2>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-bold mb-3">Your Details</h3>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-bold mb-3">Your Products</h3>
        {user.products.length > 0 ? (
          <ul className="list-disc pl-5">
            {user.products.map((product, index) => (
              <li key={index}>
                <strong>{product.name}</strong> - Rs {product.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>You have not added any products yet.</p>
        )}
      </div>
      <Link
        to="/add-product"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add Product
      </Link>
    </div>
  )
}

export default Profile