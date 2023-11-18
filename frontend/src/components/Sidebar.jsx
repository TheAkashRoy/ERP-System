import React from 'react'
import { BsPerson, BsPersonCircle } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";
import {Link} from "react-router-dom";
function Sidebar() {
  return (
    <div className=" flex flex-col p-6  h-screen bg-white  w-32  lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200 border-r-2 border-[#DBDBDB] ">
      <div className="flex flex-col justify-center items-center gap-3 text-lg md:text-2xl mt-20">
        <BsPersonCircle className="text-7xl text-[#787486]" />
        <h1 className='text-center'>Professor name</h1>
      </div>
      <div className="p-4 mt-10 flex flex-col gap-3">
        <ul className="space-y-3 hover:cursor-pointer items-center">
          <li className="p-2 text-lg text-[#787486] group-hover:text-gray-900 flex flex-row font-semibold gap-2 items-center justify-center">
            <BsPerson className="text-xl md:text-xl" />
            Profile
          </li>
    <Link to="/update-question">      
    <li className="p-2 text-lg text-[#787486] group-hover:text-gray-900 flex flex-row font-semibold gap-2 items-center justify-center">
            <FiEdit className="text-xl md:text-lg" />
             Question Bank
          </li></Link>
          <li className="p-2 text-lg text-[#787486] group-hover:text-gray-900 flex flex-row font-semibold gap-2 items-center justify-center">
            <AiOutlineSchedule className="text-xl md:text-lg" />
            Full Routine
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar