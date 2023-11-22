import React from 'react'

function CompBox({subject,time,teacher,classroom}) {
  return (
    <div className='border-2 border-blue-900 rounded-lg w-[95%] p-4 m-5 h-60 md:w-[55%] md:h-56 lg:w-[40%] lg:h-48 flex flex-col gap-3'>
    <div className='flex flex-row justify-between '>
    <div className='font-semibold text-xl'>{subject}</div>
    <div className='text-gray-700'>{time}</div>
    </div>
    <div className='border w-full border-gray-500 mb-2 '></div>
    <div className=' font-semibold text-lg'>Classroom : <span>{classroom}</span></div>
    <div className='bg-blue-300 p-2  w-full font-semibold rounded-lg'>Teacher: {teacher}</div>
    </div>
  )
}

export default CompBox
