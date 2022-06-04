import React from 'react'
import { Link } from 'react-router-dom'

const Error404Page = () => {
  return (
    <><div className='w-full h-full flex flex-col items-center justify-center'>
    <section className='  rounded-sm p-2  max-w-5xl h-full w-full '>
      <div className="w-full h-96 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-gray-700 ">404</h1>
        <h1 className="text-xl font-semibold py-5">Seems you're lost</h1>
        <Link className='bg-gray-700/90 rounded-sm shadow-sm p-1 text-center font-bold text-white w-40  hover:bg-gray-800' to='/'>Home</Link>
      </div>
    </section>
  </div></>
  )
}

export default Error404Page