import React from 'react'
import { useNavigate } from 'react-router-dom'


const Success = () => {
  const handleclick=useNavigate()
  return (
    <div className=' flex justify-center items-center animate__animated animate__backInDown'>
      <div className='flex justify-center items-center flex-col bg-secondary p-20 rounded shadow-lg mt-20'>
        <h1 className=' text-4xl font-semibold tracking-wider my-5 text-primary'> 
          Thank For Purchasing
        </h1>
        <button onClick={()=>handleclick("/")} className=' transition hover:scale-105 text-primary bg-lime-500 px-5 py-2 my-5 shadow-lg uppercase rounded'>
          Go Shopping
        </button>
      </div>      
    </div>
  )
}

export default Success