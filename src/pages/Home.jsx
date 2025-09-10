

// import React, { useState } from 'react'
// import Searchbar from '../component/Searchbar'
// import CategoryList from '../component/CategoryLisk'
// import Banner from '../component/Banner'
// import CategorySection from '../component/Categoryinfo'
// import Products from '../component/Products'
// import PriceFilterSidebar from '../component/PriceFilterSidebar'
// import { FaCog } from 'react-icons/fa'
// const Home = () => {
//   const [search, setSearch] = useState('')
//   const [filterOpen, setFilterOpen] = useState(false)
//   const [minPrice, setMinPrice] = useState('')
//   const [maxPrice, setMaxPrice] = useState('')
//   const [sort, setSort] = useState('')

//   // Pass filter and sort to Products
//   const [filter, setFilter] = useState({ minPrice: '', maxPrice: '', sort: '' })

//   const handleApply = () => {
//     setFilter({ minPrice, maxPrice, sort })
//     setFilterOpen(false)
//   }

//   return (
//     <div>
//       <Searchbar setSearch={setSearch} />
//       <CategoryList />
//         <PriceFilterSidebar
//         open={filterOpen}
//         onClose={() => setFilterOpen(false)}
//         minPrice={minPrice}
//         maxPrice={maxPrice}
//         setMinPrice={setMinPrice}
//         setMaxPrice={setMaxPrice}
//         sort={sort}
//         setSort={setSort}
//         onApply={handleApply}
//       />
//       <Banner />
//       <div className="flex justify-end px-4">
//         <button
//           className="bg-blue-600 text-white px-4 py-2 mt-8  rounded font-semibold mb-4"
//           onClick={() => setFilterOpen(true)}
//         >
//          <FaCog className='inline'/>
//         </button>
//       </div>
//       <CategorySection />
//       <Products search={search} filter={filter} />
    
//     </div>
//   )
// }

// export default Home

// import React, { useState, useEffect } from 'react'
// import Searchbar from '../component/Searchbar'
// import CategoryList from '../component/CategoryLisk'
// import Banner from '../component/Banner'
// import CategorySection from '../component/Categoryinfo'
// import Products from '../component/Products'
// import PriceFilterSidebar from '../component/PriceFilterSidebar'
// import LoginPage from '../component/Login' // Import LoginPage component

// const Home = () => {
//   const [search, setSearch] = useState('')
//   const [filterOpen, setFilterOpen] = useState(false)
//   const [minPrice, setMinPrice] = useState('')
//   const [maxPrice, setMaxPrice] = useState('')
//   const [sort, setSort] = useState('')
//   const [filter, setFilter] = useState({ minPrice: '', maxPrice: '', sort: '' })
//   const [showLoginPopup, setShowLoginPopup] = useState(false)

//   // Show login popup after 5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowLoginPopup(true)
//     }, 5000)
//     return () => clearTimeout(timer) // Cleanup timer
//   }, [])

//   const handleApply = () => {
//     setFilter({ minPrice, maxPrice, sort })
//     setFilterOpen(false)
//   }

//   const closeLoginPopup = () => {
//     setShowLoginPopup(false)
//   }

//   return (
//     <div>
//       <Searchbar setSearch={setSearch} />
//       <CategoryList />
//       <PriceFilterSidebar
//         open={filterOpen}
//         onClose={() => setFilterOpen(false)}
//         minPrice={minPrice}
//         maxPrice={maxPrice}
//         setMinPrice={setMinPrice}
//         setMaxPrice={setMaxPrice}
//         sort={sort}
//         setSort={setSort}
//         onApply={handleApply}
//       />
//       <Banner />
//       <div className="flex justify-end px-4">
//         <button
//           className="bg-blue-600 text-white px-4 py-2 mt-8 rounded font-semibold mb-4"
//           onClick={() => setFilterOpen(true)}
//         >
//           Filter & Sort
//         </button>
//       </div>
//       <CategorySection />
//       <Products search={search} filter={filter} />

//       {/* Login Popup */}
//       {showLoginPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="relative">
//             <LoginPage />  {/* Render LoginPage component */}
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
//               onClick={closeLoginPopup}
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Home


import React, { useState, useEffect } from 'react'
import Searchbar from '../component/Searchbar'
import CategoryList from '../component/CategoryLisk'
import Banner from '../component/Banner'
import CategorySection from '../component/Categoryinfo'
import Products from '../component/Products'
import PriceFilterSidebar from '../component/PriceFilterSidebar'
import LoginPage from '../component/Login' // Import LoginPage component

const Home = () => {
  const [search, setSearch] = useState('')
  const [filterOpen, setFilterOpen] = useState(false)
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState('')
  const [filter, setFilter] = useState({ minPrice: '', maxPrice: '', sort: '' })
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false)

  // Show login popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(true) // Start animation
      setTimeout(() => setShowLoginPopup(true), 300) // Show popup after animation
    }, 5000)
    return () => clearTimeout(timer) // Cleanup timer
  }, [])

  const closeLoginPopup = () => {
    setPopupVisible(false) // Start closing animation
    setTimeout(() => setShowLoginPopup(false), 300) // Hide popup after animation
  }

  const handleApply = () => {
    setFilter({ minPrice, maxPrice, sort })
    setFilterOpen(false)
  }

  return (
    <div>
      <Searchbar setSearch={setSearch} />
      <CategoryList />
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
      <Banner />
      <div className="flex justify-end px-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 mt-8 rounded font-semibold mb-4"
          onClick={() => setFilterOpen(true)}
        >
          Filter & Sort
        </button>
      </div>
      <CategorySection />
      <Products search={search} filter={filter} />

      {/* Login Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className={`relative bg-white rounded-lg shadow-lg p-6 w-96 transition-transform duration-300 ${
              popupVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}
          >
            <LoginPage /> {/* Render LoginPage component */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
              onClick={closeLoginPopup}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home