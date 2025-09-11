import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { categories } from '../component/Products'
import CategoryList from '../component/CategoryLisk'
import PriceFilterSidebar from '../component/PriceFilterSidebar'
import { FaCog } from 'react-icons/fa'
const CategoryPage = () => {
  const { slug } = useParams()
  const category = categories.find(
    c => c.name.toLowerCase().replace(/\s+/g, '-') === slug
  )

  const [filterOpen, setFilterOpen] = useState(false)
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState('')
  const [filter, setFilter] = useState({ minPrice: '', maxPrice: '', sort: '' })

  const handleApply = () => {
    setFilter({ minPrice, maxPrice, sort })
    setFilterOpen(false)
  }

  if (!category) return <div className="text-center py-10">Category not found</div>

  // Filtering & Sorting
  let filteredProducts = category.products
  if (filter.minPrice)
    filteredProducts = filteredProducts.filter(p => parseInt(p.price.replace(/[^\d]/g, '')) >= parseInt(filter.minPrice))
  if (filter.maxPrice)
    filteredProducts = filteredProducts.filter(p => parseInt(p.price.replace(/[^\d]/g, '')) <= parseInt(filter.maxPrice))
  if (filter.sort === 'low')
    filteredProducts = [...filteredProducts].sort((a, b) => parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, '')))
  if (filter.sort === 'high')
    filteredProducts = [...filteredProducts].sort((a, b) => parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, '')))
  // For 'latest', you can sort by time if you have a date field

  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryList />
      <div className="flex justify-end">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded font-semibold mb-4"
          onClick={() => setFilterOpen(true)}
        >
          <FaCog />
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-6">{category.name} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <Link
            to={`/product/${category.name.toLowerCase().replace(/\s+/g, '-')}-${product.id}`}
            key={product.id}
            className="block"
          >
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 h-full flex flex-col">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <p className="text-blue-700 font-bold text-lg mb-1">Rs {product.price}</p>
                <h4 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">{product.title}</h4>
                <p className="text-sm text-gray-600 mb-1">{product.location}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-400">{product.time}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <PriceFilterSidebar
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        sort={sort}
        setSort={setSort}
        onApply={handleApply}
      />
    </div>
  )
}

export default CategoryPage