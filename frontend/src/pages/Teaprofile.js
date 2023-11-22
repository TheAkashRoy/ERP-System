import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

function Teaprofile() {
  return (
    <div className='bg-slate-300'>
    <div className="flex flex-col lg:flex-row w-full gap-4 m-4">
    <div className="flex flex-row items-start p-10 gap-6 font-bold lg:w-5/6 text-lg bg-white lg:flex-col rounded-xl shadow-lg">

    <div className='border-2 border-blue-800 p-5 flex flex-row justify-center items-center rounded-xl'><IoPersonCircleOutline className='w-56 h-48 '/></div>

      <div className="flex flex-col gap-3 ml-2 lg:ml-0 text-blue-900 opacity-95 lg:mt-3">
        <h2 className='text-2xl'>Name:<span className='font-semibold text-xl ml-2 text-gray-600'>Mr. Ram Gopal Verma</span></h2>
        <h3 className='text-2xl'>Dept Name:<span className='font-semibold text-xl ml-2 text-gray-600'>Computer Science Engineering</span></h3>
        <h3 className='text-2xl'>Specialization:<span className='font-semibold text-xl ml-2 text-gray-600'>Machine Learning & Nueral networks</span></h3>
        <div className="flex flex-row text-3xl gap-5 mt-2">
          <FaLinkedin />
          <FaGithub />
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-6 p-10 bg-white rounded-xl shadow-lg">
      <div>
        <h2 className="font-semibold text-2xl text-blue-800">
          Educational Background
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          animi nihil sit excepturi veniam temporibus accusantium repellat
          necessitatibus deleniti. Iste ad alias aliquam numquam hic quo
          sequi facilis tenetur maxime!
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-2xl text-blue-800">Research Paper</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          totam tempore error accusantium et aliquam quia maxime eos
          inventore vel, in hic veniam, esse at facilis incidunt. Obcaecati,
          maiores iusto!
        </p>
      </div>
      <h3 className="font-semibold text-blue-800 text-2xl">Year of service: <span className='font-semibold text-xl ml-2 text-gray-600'>6</span></h3>
    </div>
  </div>
    </div>
  )
}

export default Teaprofile
