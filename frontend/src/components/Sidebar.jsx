import React from 'react'
import { BsPerson, BsPersonCircle } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";
import {Link} from "react-router-dom";
function Sidebar() {
  return (
    <div className=" flex w-[20%] flex-col p-2 bg-slate-700 text-white gap-20 items-center lg:w-[20%]">
      <div className="p-3 flex flex-col items-center gap-5 text-lg md:text-2xl">
        <BsPersonCircle className="text-7xl" />
        <h1>Name</h1>
      </div>
      <div className="p-4">
        <ul className="space-y-3 hover:cursor-pointer items-center">
          <li className="p-2 rounded-md hover:bg-red-400 flex gap-2 text-sm items-center md:text-lg border-b-2">
            <BsPerson className="text-xl md:text-xl" />
            Profile
          </li>
    <Link to="/update-question">      <li className="p-2 rounded-md hover:bg-red-400 flex gap-2 text-sm items-center md:text-lg border-b-2">
            <FiEdit className="text-xl md:text-lg" />
            Update Question Bank
          </li></Link>
          <li className="p-2 rounded-md hover:bg-red-400 flex gap-2 text-sm items-center md:text-lg border-b-2">
            <AiOutlineSchedule className="text-xl md:text-lg" />
            Full Routine
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
