import React from 'react'
import Sidebar from '../components/Sidebar'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import RoutineBox from '../components/RoutineBox'
function Dashboard() {
  const [routine,setRoutine]=useState([]);

  return (
    <div>
      
      
        <div className='flex flex-row ga[-1'> 
          <Sidebar/>
          {/*useEffect to display all info of the routine*/}
          <div className='p-10 bg-gray-100 w-full '>    
        <h1 className='font-bold text-4xl text-gray-600 p-4 border-b-2 border-gray-400'>Date Month,Day 2023</h1>
        <div className='flex flex-wrap gap-4 p-4'>
        <RoutineBox subject={'Math'} time={'10:00-11:00'} code={'1234'} period={'1'}/>
        <RoutineBox subject={'Math'} time={'10:00-11:00'} code={'1234'} period={'1'}/>
        <RoutineBox subject={'Math'} time={'10:00-11:00'} code={'1234'} period={'1'}/>
        <RoutineBox subject={'Math'} time={'10:00-11:00'} code={'1234'} period={'1'}/>
        <RoutineBox subject={'Math'} time={'10:00-11:00'} code={'1234'} period={'1'}/>

        </div>
          </div>
        </div>
      
    </div>
  )
}

export default Dashboard
