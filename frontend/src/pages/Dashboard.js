import React from 'react'
import Sidebar from '../components/Sidebar'
function Dashboard() {
  return (
    <div>
      
      <section>
        <div className='flex flex-row ga[-1'> 
          <Sidebar/>
          <div className=' bg-green-200 w-full '>             
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
