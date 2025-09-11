import React from 'react'
import { Link } from 'react-router-dom'
import Mobiles from '../imagesHome/mobile.jpeg'
import Mobiles1 from '../imagesHome/mobile 1.jpeg'
import Vehicles from '../imagesHome/images.webp'
import Vehicles0 from '../imagesHome/vehicles.webp'
import Vehicles1 from '../imagesHome/vehicles1.jpeg'
import PropertyforSale from '../imagesHome/propertyforsale.jpeg'
import PropertyforSale1 from '../imagesHome/propertyforsale1.jpeg'
import PropertyforRent from '../imagesHome/propertyforrent.png'
import PropertyforRent1 from '../imagesHome/propertyforrent1.jpeg'
import ElectronicsHomeAppliances from '../imagesHome/electronic.webp'
import ElectronicsHomeAppliances1 from '../imagesHome/electronic1.jpeg'
import Bikes from '../imagesHome/bike.jpeg'
import Bikes1 from '../imagesHome/bike21.jpeg'
import BusinessIndustrialAgriculture from '../imagesHome/bussiness.jpeg'
import job from '../imagesHome/job.jpeg'
import job1 from '../imagesHome/job1.jpeg'
import Animals from '../imagesHome/cat.jpeg'
import Animal1 from '../imagesHome/animal1.jpeg'
import Kids from '../imagesHome/kid.webp'
import Books from '../imagesHome/book.jpeg'
import Beauty from '../imagesHome/beauty.jpeg'
import Furniture from '../imagesHome/ferniture.jpeg'
import Fashion from '../imagesHome/fashion.jpeg'
import Fashion1 from '../imagesHome/fashion1.jpeg'

export const categories = [
  {
    name: "Mobiles",
    products: [
      { id: 4, title: "Samsung Galaxy S21", price: "85000", image: Mobiles1, location: "Lahore", time: "2 weeks ago", Posted: "User a" ,number: "0123456789" },
      { id: 1, title: "Apple iPhone 13 Pro – 128GB | Non-PTA | Jv", price: "105000", image: Mobiles, location: "Saddar, Rawalpindi", time: "4 weeks ago", Posted: "User b" ,number: "0123456789"  },
      { id: 3, title: "Apple iPhone 13 Pro – 128GB | Non-PTA | Jv", price: "105000", image: Mobiles1, location: "Saddar, Rawalpindi", time: "4 weeks ago", Posted: "User c " ,number: "0123456789"   },
      { id: 2, title: "Samsung Galaxy S21", price: "85000", image: Mobiles, location: "Lahore", time: "2 weeks ago", Posted: "User d" ,number: "0123456789"  },
    ]
  },
  {
    name: "Vehicles",
    products: [
      { id: 1, title: "Honda Civic 2020", price: "3800000", image: Vehicles, location: "Karachi", time: "1 week ago", Posted: "User e" ,number: "0123456789"  },
      { id: 2, title: "Suzuki Alto 2022", price: "2200000", image: Vehicles0, location: "Faisalabad", time: "3 days ago", Posted: "User f" ,number: "0123456789"  },
      { id: 3, title: "Honda Civic 2020", price: "3800000", image: Vehicles, location: "Karachi", time: "1 week ago", Posted: "User g "  ,number: "0123456789" },
      { id: 4, title: "Suzuki Alto 2022", price: "2200000", image: Vehicles1, location: "Faisalabad", time: "3 days ago" , Posted: "User h",number: "0123456789"  },
    ]
  },
   {
    name: "Books",
    products: [
      { id: 1, title: "CSS Books Set", price: "2500", image: Books, location: "Lahore", time: "1 week ago", Posted: "User i"  ,number: "0123456789" },
      { id: 2, title: "Kids Story Books", price: "1000", image: Books, location: "Faisalabad", time: "2 days ago" , Posted: "User j" ,number: "0123456789" },
    ]
  },
  {
    name: "Property for Sale",
    products: [
      { id: 1, title: "5 Marla House for Sale", price: "9500000", image: PropertyforSale, location: "Bahria Town, Lahore", time: "2 weeks ago" , Posted: "User k" ,number: "0123456789" },
      { id: 2, title: "Plot for Sale", price: "3000000", image: PropertyforSale1, location: "DHA, Karachi", time: "1 week ago" , Posted: "User l" ,number: "0123456789" },
      { id: 3, title: "5 Marla House for Sale", price: "9500000", image: PropertyforSale, location: "Bahria Town, Lahore", time: "2 weeks ago" , Posted: "User m" ,number: "0123456789" },
      { id: 4, title: "Plot for Sale", price: "3000000", image: PropertyforSale1, location: "DHA, Karachi", time: "1 week ago" , Posted: "User n" ,number: "0123456789" },
    ]
  },
  {
    name: "Property for Rent",
    products: [
      { id: 1, title: "2 Bed Apartment", price: "35000", image: PropertyforRent, location: "Gulshan, Karachi", time: "5 days ago" , Posted: "User o" ,number: "0123456789" },
      { id: 2, title: "Shop for Rent", price: "15000", image: PropertyforRent1, location: "Model Town, Lahore", time: "1 day ago" , Posted: "User p" ,number: "0123456789" },
      { id: 3, title: "2 Bed Apartment", price: "35000", image: PropertyforRent, location: "Gulshan, Karachi", time: "5 days ago" , Posted: "User q" ,number: "0123456789" },
      { id: 4, title: "Shop for Rent", price: "15000", image: PropertyforRent1, location: "Model Town, Lahore", time: "1 day ago", Posted: "User r"  ,number: "0123456789" },
    ]
  },
  {
    name: "Electronics",
    products: [
      { id: 1, title: "LED TV 42 Inch", price: "18000", image: ElectronicsHomeAppliances, location: "Islamabad", time: "3 weeks ago", Posted: "User s"  ,number: "0123456789" },
      { id: 2, title: "Washing Machine", price: "12000", image: ElectronicsHomeAppliances1, location: "Multan", time: "2 weeks ago" , Posted: "User t" ,number: "0123456789" },
      { id: 3, title: "LED TV 42 Inch", price: "18000", image: ElectronicsHomeAppliances, location: "Islamabad", time: "3 weeks ago", Posted: "User u" ,number: "0123456789"  },
      { id: 4, title: "Washing Machine", price: "12000", image: ElectronicsHomeAppliances1, location: "Multan", time: "2 weeks ago", Posted: "User v"  ,number: "0123456789" },
    ]
  },
  {
    name: "Bikes",
    products: [
      { id: 1, title: "Honda 125", price: "180000", image: Bikes, location: "Peshawar", time: "1 week ago", Posted: "User w"  ,number: "0123456789" },
      { id: 2, title: "Yamaha YBR", price: "220000", image: Bikes1, location: "Quetta", time: "2 days ago", Posted: "User x"  ,number: "0123456789" },
      { id: 3, title: "Honda 125", price: "180000", image: Bikes, location: "Peshawar", time: "1 week ago", Posted: "User y"  ,number: "0123456789" },
      { id: 4, title: "Yamaha YBR", price: "220000", image: Bikes1, location: "Quetta", time: "2 days ago", Posted: "User z"  ,number: "0123456789" },
    ]
  },
  {
    name: "Business & Agriculture",
    products: [
      { id: 1, title: "Tractor for Sale", price: "800000", image: BusinessIndustrialAgriculture, location: "Sahiwal", time: "3 weeks ago", Posted: "User a1" ,number: "0123456789"  },
      { id: 2, title: "Dairy Equipment", price: "50000", image: BusinessIndustrialAgriculture, location: "Okara", time: "1 week ago", Posted: "User a2" ,number: "0123456789"  },
    ]
  },
  {
    name: "Beauty",
    products: [
      { id: 1, title: "Makeup Kit", price: "3000", image: Beauty, location: "Karachi", time: "3 weeks ago" , Posted: "User a3" ,number: "0123456789" },
      { id: 2, title: "Hair Dryer", price: "2000", image: Beauty, location: "Lahore", time: "1 week ago", Posted: "User a4"  ,number: "0123456789" },
    ]
  },
  {
    name: "Jobs",
    products: [
      { id: 1, title: "Accountant Required", price: "—", image: job, location: "Lahore", time: "2 days ago", Posted: "User a5"  ,number: "0123456789" },
      { id: 2, title: "Salesman Needed", price: "—", image: job1, location: "Karachi", time: "1 week ago" , Posted: "User a6" ,number: "0123456789" },
      { id: 3, title: "Accountant Required", price: "—", image: job, location: "Lahore", time: "2 days ago", Posted: "User a7"  ,number: "0123456789" },
      { id: 4, title: "Salesman Needed", price: "—", image: job1, location: "Karachi", time: "1 week ago" , Posted: "User a8" ,number: "0123456789" },
    ]
  },
  {
    name: "Animals",
    products: [
      { id: 1, title: "Persian Cat", price: "15,000", image: Animals, location: "Rawalpindi", time: "1 week ago", Posted: "User a9"  ,number: "0123456789" },
      { id: 2, title: "Australian DOG", price: "3,000", image: Animal1, location: "Lahore", time: "3 days ago", Posted: "User b1" ,number: "0123456789"  },
      { id: 3, title: "Persian Cat", price: "15,000", image: Animals, location: "Rawalpindi", time: "1 week ago", Posted: "User b2" ,number: "0123456789"  },
      { id: 4, title: "Siberian Husky", price: "50,000", image: Animal1, location: "Islamabad", time: "2 weeks ago", Posted: "User b3"  ,number: "0123456789" }
    ]
  },
  {
    name: "Kids",
    products: [
      { id: 1, title: "Baby Stroller", price: "7,000", image: Kids, location: "Islamabad", time: "2 weeks ago" , Posted: "User b4" ,number: "0123456789" },
      { id: 2, title: "Kids Bicycle", price: "5,000", image: Kids, location: "Karachi", time: "1 week ago" , Posted: "User b5" ,number: "0123456789" },
    ]
  },

  {
    name: "Furniture",
    products: [
      { id: 1, title: "Sofa Set", price: "25,000", image: Furniture, location: "Islamabad", time: "2 weeks ago", Posted: "User b6" ,number: "0123456789" },
      { id: 2, title: "Dining Table", price: "18,000", image: Furniture, location: "Karachi", time: "3 days ago", Posted: "User b7" ,number: "0123456789" },
    ]
  },
  {
    name: "Fashion",
    products: [
      { id: 1, title: "Men's Kurta", price: "2,500", image: Fashion, location: "Lahore", time: "1 week ago", Posted: "User b8" ,number: "0123456789" },
      { id: 2, title: "Ladies Suit", price: "3,500", image: Fashion1, location: "Multan", time: "2 days ago", Posted: "User b9" ,number: "0123456789" },
      { id: 3, title: "Ladies Suit", price: "3,500", image: Fashion, location: "Multan", time: "2 days ago", Posted: "User c1" ,number: "0123456789" },
      { id: 4, title: "Men's Kurta", price: "2,500", image: Fashion1, location: "Lahore", time: "1 week ago", Posted: "User" ,number: "0123456789" },
    ]
  },
]


const Products = ({ search = '', filter = {} }) => {
  const searchText = search.trim().toLowerCase()

return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Latest Products</h2>
      {categories.map((cat, idx) => {
        // Filter by search
        let filtered = cat.products.filter(product =>
          product.title.toLowerCase().includes(searchText) ||
          product.location.toLowerCase().includes(searchText) ||
          cat.name.toLowerCase().includes(searchText)
        )
        // Filter by price
        if (filter.minPrice)
          filtered = filtered.filter(p => parseInt(p.price.replace(/[^\d]/g, '')) >= parseInt(filter.minPrice))
        if (filter.maxPrice)
          filtered = filtered.filter(p => parseInt(p.price.replace(/[^\d]/g, '')) <= parseInt(filter.maxPrice))
        // Sort
        if (filter.sort === 'low')
          filtered = [...filtered].sort((a, b) => parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, '')))
        if (filter.sort === 'high')
          filtered = [...filtered].sort((a, b) => parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, '')))
        // For 'latest', you can sort by time if you have a date field

        if (filtered.length === 0) return null
        return (
          <div key={idx} className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">{cat.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <Link
                  to={`/product/${cat.name.toLowerCase().replace(/\s+/g, '-')}-${product.id}`}
                  key={cat.name + '-' + product.id + '-' + i}
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
          </div>
        )
      })}
    </div>
  )
}

export default Products