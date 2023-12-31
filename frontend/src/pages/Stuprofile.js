import React from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";

function Stuprofile() {
  return (
    <>
    <div className="flex flex-row gap-2 bg-slate-300">
      <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-24 m-6 p-20 rounded-xl shadow-lg bg-white items-center">
      <div className='border-2 border-blue-800 p-5 rounded-xl'><IoPersonCircleOutline className='w-56 h-48 '/></div>
      
      <div className="flex flex-col gap-4  text-lg ">
          <div className="flex flex-col gap-3 ml-5 lg:ml-0 text-blue-900 opacity-95 lg:mt-3">
            <h2 className='text-3xl'>Name: <span className='font-semibold text-2xl text-gray-600'>Anmol Reshi</span> </h2>
            <h3 className='text-3xl'>Enrollment no: <span className='font-semibold text-2xl text-gray-600'> 120210020190010</span></h3>
            <h3 className='text-3xl'>Stream: <span className='font-semibold text-2xl text-gray-600'>Computer Science Engineering</span></h3>
            <h3 className='text-3xl'>Batch: <span className='font-semibold text-2xl text-gray-600'>2021</span></h3>
            <h3 className='text-3xl'>Semester: <span className='font-semibold text-2xl text-gray-600'>5th</span></h3>
            <h3 className='text-3xl'>Roll no: <span className='font-semibold text-2xl text-gray-600'>24</span></h3>
            <h3 className='text-3xl'>Section: <span className='font-semibold text-2xl text-gray-600'>B</span></h3>
            <h3 className='text-3xl'>Phone no: <span className='font-semibold text-2xl text-gray-600'>9090456789</span></h3>
            <h3 className='text-3xl'>Email id: <span className='font-semibold text-2xl text-gray-600'>abc@gmail.com</span></h3>
          </div>

          <table class="table-auto border-seperate border border-slate-500 bg-blue-100">
            <thead className="text-blue-800">
              <tr>
                <th className="border border-slate-500 p-3 ">Subject Name</th>
                <th className="border border-slate-500 p-3">Credit Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-500 p-2">
                  Software Engineering
                </td>
                <td className="border border-slate-500 p-2 ">3</td>
              </tr>
              <tr>
                <td className="border border-slate-500 p-2">
                  Database Management System
                </td>
                <td className="border border-slate-500 p-2">3</td>
              </tr>
              <tr>
                <td className="border border-slate-500 p-2">
                  Object Oriented Programming
                </td>
                <td className="border border-slate-500 p-2">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Stuprofile
