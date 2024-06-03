import React from 'react'
import { useNavigate } from 'react-router-dom'

function TableBooking() {

  const navigate = useNavigate();

  return (
    <form className='mt-10 flex flex-col items-center space-y-5'>
      <p className='text-3xl font-bold pb-5'>Fill up your details</p>

      <input type='text' placeholder='Enter your first name:' className='w-80 bg-black p-3 rounded-xl
      placeholder:text-white text-yellow-300'></input>

      <input type='text' placeholder='Enter your last name:' className='w-80 bg-black p-3 rounded-xl
      placeholder:text-white text-yellow-300'></input>

      <div className='flex pt-5'>
        <label htmlFor='guests' className='text-black font-bold text-xl'>Number of guests:</label>
        <select name='guests' className='bg-black text-yellow-300 ml-5 p-1 rounded-xl'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>

      <div className='flex'>
        <label htmlFor='date' className='text-black font-bold text-xl'>Date:</label>
        <input name='date' type='date' className='bg-gray-600 text-yellow-300 ml-5'></input>
      </div>

      <div className='flex'>
        <label htmlFor='occasion' className='text-black font-bold text-xl'>Any special occasion?</label>
        <select name='occasion' className='bg-black text-yellow-300 ml-5 p-1 rounded-xl'>
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <button onClick={() => {alert('Reservation Made Successfully'); navigate('/')}} 
        className='py-3 px-10 bg-black text-yellow-300 rounded-2xl'>
          Submit
      </button>

    </form>
  )
}

export default TableBooking