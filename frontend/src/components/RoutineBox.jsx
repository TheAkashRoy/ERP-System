import React from 'react'

function RoutineBox({subject,time,code,period}) {
  return (
    <div className='border-2 border-blue-900 w-80 p-2 m-5'>
      <div className='flex flex-row justify-between '>
      <div>{subject}</div>
      <div>{time}</div>
      </div>
      <div className='border w-full border-gray-400 mb-2'></div>
      <div className='mb-3'>Chapter Name: Lorem ipsum dolor sit amet consectetur.</div>
      <div className='bg-blue-300 p-2 text-center w-full'>Code:1234</div>
    </div>
  )
}

export default RoutineBox
