import React from 'react'
import { Link } from 'react-router-dom'
const Register = ({openLogin}) => {
  return (

      <div>
        <h2 className='text-2xl font-bold mb-4'>Signup</h2>
        <form>
          <div className='mb-4'>
               <label className='block text-gray-700'>Name</label>
               <input type="text" placeholder='Enter a Name   ' className='w-full px-3 py-2 border' />
          </div>
          <div className='mb-4'>
               <label className='block text-gray-700'>Email</label>
               <input type="email" placeholder='Enter a Email' className='w-full px-3 py-2 border' />
          </div>
           <div  className='mb-4'>
               <label className='block text-gray-700'>Password</label>
               <input type="password" placeholder='Enter a Email' className='w-full px-3 py-2 border' />
          </div>
        
           <div className='mb-4'>
              <button className='w-full bg-blue-600 text-white py-2'>Sign Up</button>
           </div>
  
        </form>
        <div className='text-center'>
          <span className='text-gray-700'>
              Already Have an Account?  </span>
        <Link className='text-red-800' onClick={openLogin} to="/login">Login</Link >

        </div>
      </div>
  
   
  )
}

export default Register
