import React from 'react'
import { useState } from 'react'
import { RxCrossCircled } from "react-icons/rx";

function RoutineBox({subject,time,year}) {
  const [code,setCode]=useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => {
    setIsModalOpen(true);
    {/*api call to get code*/}
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  function handleClick(){

  }
  return (
    <>
    <div className='border-2 border-blue-900 rounded-lg w-[95%] p-4 m-5 h-60 md:w-[55%] md:h-56 lg:w-[40%] lg:h-48 flex flex-col gap-3'>
      <div className='flex flex-row justify-between '>
      <div className='font-semibold text-xl'>{subject}</div>
      <div className='text-gray-700'>{time}</div>
      </div>
      <div className='border w-full border-gray-500 mb-2 '></div>
      <div className=' font-semibold text-lg'>Year : <span>{year}</span></div>
      {
        code?
        (<div className='bg-blue-300 p-2 text-center w-full font-semibold rounded-lg'>code: {code}</div>):
        (<button onClick={openModal} className='bg-blue-300 p-2 text-center rounded-lg w-full font-semibold'> Set Code</button>)
      }
      
    </div>
    {isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white w-4/5 h-screen rounded-md relative p-8">
          <button
            onClick={closeModal}
            className="absolute top-4 text-3xl font-bold right-2 text-gray-500 hover:text-gray-700 mr-5"
          >
          <RxCrossCircled />
          </button>
          {/* Your modal content goes here */}
          <p className='font-bold text-2xl text-gray-600 p-4 border-b-2 border-gray-400'>Choose Question Paper from available Sets </p>
        </div>
      </div>
      
    )}
    </>
  )
}

export default RoutineBox
