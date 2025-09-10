import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from './Products'

const CategoryList = () => (
  <div className="flex flex-wrap gap-4 justify-center my-6">
    {categories.map(cat => (
      <Link
        key={cat.name}
        to={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
        className="bg-white shadow rounded-lg px-4 py-2 font-semibold hover:bg-blue-100 transition"
      >
        {cat.name}
      </Link>
    ))}
  </div>
)

export default CategoryList