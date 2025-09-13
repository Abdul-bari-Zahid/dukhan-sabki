import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductPage.jsx'
import Footer from './component/Footer.jsx'
import Headbar from './component/Headbar.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import Shop from './pages/Shop.jsx'
import AddProduct from './pages/AddProduct'
import Message from './pages/Massage.jsx'
import Profile from './pages/Profile.jsx'
import Login from './component/Login.jsx'
import Register from './component/Register.jsx'
function App() {
  const [user, setUser] = useState(null) // User state to manage authentication and products

  return (
    <>
     <BrowserRouter>
     <Headbar />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/product/:slug" element={<ProductDetails/>} />
      <Route path='/category/:slug' element={<CategoryPage />} />
      <Route path='/shop' element={<Shop />} />
        <Route path="/add-product" element={<AddProduct />} />
       <Route path="/messages" element={<Message />} />
      <Route path="/profile" element={<Profile user={user} />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/register" element={<Register setUser={setUser} />} />

     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
