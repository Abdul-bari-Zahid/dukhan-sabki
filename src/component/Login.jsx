import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({openSignUp}) => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form>
        <div className='mb-4'>
             <label className='block text-gray-700'>Email</label>
             <input type="email" placeholder='Enter a Email' className='w-full px-3 py-2 border' />
        </div>
         <div  className='mb-4'>
             <label className='block text-gray-700'>Password</label>
             <input type="password" placeholder='Enter a Email' className='w-full px-3 py-2 border' />
        </div>
        <div className='mb-4 flex items-center justify-between'>
             <label className='inline-flex items-center'>
                <input type="checkbox" className='form-checkbox'/>
                <span className='ml-2 text-gray-700'>Remenber Me</span>
             </label>
                <a href="" className='text-red-800'>Forget Password?</a>
         </div>
         <div className='mb-4'>
            <button className='w-full bg-blue-600 text-white py-2'>Login</button>
         </div>

      </form>
      <div className='text-center'>
        <span className='text-gray-700'> Don't Have an Account? </span>
        <Link className='text-red-800' onClick={openSignUp} to="/register">Sign UP</Link >
      </div>
    </div>
  )
}

export default Login
