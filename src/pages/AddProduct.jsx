import React, { useState } from 'react'

const AddProduct = () => {
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [condition, setCondition] = useState('new')
  const [images, setImages] = useState([])

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    setImages(files)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const productData = {
      category,
      name,
      description,
      price,
      condition,
      images,
    }
    console.log('Product Data:', productData)
    alert('Product added successfully!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Product Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select Category</option>
            <option value="mobiles">Mobiles</option>
            <option value="vehicles">Vehicles</option>
            <option value="property">Property</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter product name"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter product description"
          ></textarea>
        </div>
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter product price"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Condition</label>
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                value="new"
                checked={condition === 'new'}
                onChange={(e) => setCondition(e.target.value)}
              />
              New
            </label>
            <label>
              <input
                type="radio"
                value="used"
                checked={condition === 'used'}
                onChange={(e) => setCondition(e.target.value)}
              />
              Used
            </label>
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-1">Upload Images</label>
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct