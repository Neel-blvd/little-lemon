import React from 'react'
import tomCruise from '../public/tomCruise.jpg'
import creedBratton from '../public/creedBratton.png'
import idrisElba from '../public/_330603286208.webp'

function Testimonials() {
  return (
    <div className='mt-20'>
      <p className='text-center font-bold text-yellow-300 text-xl'>Testimonials</p>
      <div className='flex justify-center space-x-5 text-white mt-5'>
          <div>
              <img src={tomCruise} width='250' className='rounded-full p-3'></img>
              <p className='w-60'>
                Great food, always bring my wife and kids here!
              </p>
          </div>
          <div>
              <img src={creedBratton} width='250' className='rounded-full p-3'></img>
              <p className='w-60'>
                This place has come a long way since I started this in the fifties, with my son.
              </p>
          </div>
          <div>
              <img src={idrisElba} width='250' className='rounded-full p-3'></img>
              <p className='w-60'>
                This food has the same effect on me, as I have on women.
              </p>
          </div>
      </div>
    </div>
  )
}

export default Testimonials