import React from "react";
import {
  BsPerson,
  BsPersonCircle,
  BsCalendarDate,
  BsBook,
} from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";
function Sidebar2() {
  return (
    <div className=" flex flex-col h-screen bg-white  w-32  lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200 border-r-2 border-[#DBDBDB] ">
      <div className="flex flex-col justify-center items-center gap-3 text-lg md:text-2xl mt-20">
        <BsPersonCircle className="text-7xl text-[#787486]" />
        <h1 className="text-center">Student name</h1>
      </div>
      <div className="p-4 mt-10 flex flex-col gap-3">
        <ul className="space-y-3 hover:cursor-pointer items-center">
          <li className="p-2 text-lg text-[#787486] group-hover:text-gray-900 flex flex-row font-semibold gap-2 items-center lg:ml-4">
            <BsPerson className="hidden lg:block" />
            Profile
          </li>
          <li className="p-2 text-lg text-[#787486] group-hover:text-gray-900 flex flex-row font-semibold gap-2 items-center lg:ml-4">
            <AiOutlineSchedule className="hidden lg:block" />
            Full Routine
          </li>
          {/* <Link to="/update-question"> */}
          <li className="p-2 text-lg text-[#787486] group-hover:text-gray-900 flex flex-row font-semibold gap-2 items-center lg:ml-4">
            <BsBook className="hidden lg:block" />
            Subject Material
          </li>
          {/* </Link> */}
          <Link to="/calendar">
            <li className="p-2 text-lg text-[#787486] group-hover:text-gray-900 flex flex-row font-semibold gap-2 items-center lg:ml-4">
              <BsCalendarDate className="hidden lg:block" />
              Calendar
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar2;
