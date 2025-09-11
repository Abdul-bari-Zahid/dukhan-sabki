import React, {useState} from 'react'
import Logo from '../imagesHome/logo.png'
import Car from '../imagesHome/vehicles.webp'
import House from '../imagesHome/house.jpeg'
import { Link , useNavigate } from 'react-router-dom'
import Modal from './Modal'
import Register from './Register'
import Login from './Login'
const Headbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

 const openSignUp = () =>{
    setIsLogin(false)
    setIsModelOpen(true)
  }
  const openLogin = () =>{
    setIsLogin(true)
    setIsModelOpen(true)
  }
    const navigate = useNavigate()

  const handleSellClick = () => {
    navigate('/add-product') // Redirect to Add Product Page
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-sky-100 md:h-24 gap-4">
      {/* Logo */}
      <div className="logo flex-shrink-0 mb-3 ">
       <Link to="/"> 
       <img
          src={Logo}
          alt=""
          // className="w-16 h-16 md:w-20 md:h-20 bg-white p-2 md:p-4 rounded-lg mt-0 md:mt-4 mx-auto"
          className="w-48 h-24 mix-blend-multiply md:w-32 md:h-20 bg-white p-2 md:p-4 rounded-lg mt-0 md:mt-4 mx-auto "
        />
      
        </Link>
      </div>

      {/* Categories */}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-between items-center">
        <div className="flex items-center">
          {/* <img src={Car} alt="" className="w-12 h-8 md:w-18 md:h-10 mix-blend-multiply" /> */}
          
          <Link to="/" className="hover:underline"><h4 className="font-semibold text-base md:text-lg ml-2 hover:underline">Home</h4>
          </Link>
        </div>
        <div className="flex items-center">
          {/* <img src={House} alt="" className="w-12 h-8 md:w-18 md:h-10 mix-blend-multiply" /> */}
          {/* <h4 className="font-semibold text-base md:text-lg ml-2 hover:underline">Property</h4> */}
           <Link to="/shop" className="hover:underline"><h4 className="font-semibold text-base md:text-lg ml-2 hover:underline">Shop</h4>
          </Link>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-between mt-2 md:mt-0">
        <button className="font-semibold text-base md:text-lg underline"   onClick={()=> setIsModelOpen(true)}>Login</button>
    <button
           className="font-semibold text-base md:text-lg bg-blue-500 text-white px-4 md:px-8 py-1 md:py-2 rounded"
           onClick={handleSellClick}
         >
           Sell
         </button>
         
      </div>
       <Modal isModelOpen={isModelOpen } setIsModelOpen={setIsModelOpen}>
          {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/>}
        </Modal>
    </div>
  )
}

export default Headbar



