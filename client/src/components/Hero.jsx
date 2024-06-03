import React from 'react'
import '../index.css'
import barbecue from '../public/barbecue.jpg'

function Hero() {
  return (
    <div className='flex justify-center space-x-32'>
        <div>
          <p className='text-yellow-300 text-4xl font-bold pb-1'>Little Lemon</p>
          <p className='text-white text-xl pb-5'>Nashville</p>
          <p className='w-60 font-bold'>
            We are a family owned Mediterranean restaurant, focuesed on traditional recipes, served with a    modern twist
          </p>
        </div>
        <img src={barbecue} width='300' className=' rounded-full'></img>
    </div>
  )
}

export default Hero