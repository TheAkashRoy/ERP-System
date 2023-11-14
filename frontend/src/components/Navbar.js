import React from "react";
import { BsPerson, BsPersonCircle } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";

export const Navbar = () => {
  return (
    <div className="h-screen flex w-1/3 flex-col p-4 bg-slate-700 text-white gap-20 items-center sm:w-1/4">
      <div className="p-8 flex flex-col items-center gap-5 text-lg md:text-2xl">
        <BsPersonCircle className="text-7xl" />
        <h1>Name</h1>
      </div>
      <div className="p-4">
        <ul className="space-y-3 hover:cursor-pointer items-center">
          <li className="p-2 rounded-md hover:bg-red-400 flex gap-2 text-sm items-center md:text-lg border-b-2">
            <BsPerson className="text-xl md:text-xl" />
            Profile
          </li>
          <li className="p-2 rounded-md hover:bg-red-400 flex gap-2 text-sm items-center md:text-lg border-b-2">
            <FiEdit className="text-xl md:text-lg" />
            Update Question Bank
          </li>
          <li className="p-2 rounded-md hover:bg-red-400 flex gap-2 text-sm items-center md:text-lg border-b-2">
            <AiOutlineSchedule className="text-xl md:text-lg" />
            Full Routine
          </li>
        </ul>
      </div>
    </div>
  );
};
