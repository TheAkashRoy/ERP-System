import React from 'react'
import Sidebar2 from '../components/Sidebar2'
import data from '../components/sturoutine.json'
import CompBox from '../components/CompBox';
function Studashboard() {
  var currentDate = new Date();

var day = currentDate.getDate();
var month = currentDate.toLocaleString('default', { month: 'long' }); // 'long' gives the full month name
var year = currentDate.getFullYear();
var curentDay=currentDate.toLocaleString('default', { weekday: 'long' });
console.log(curentDay);
var formattedDate = day + ' ' + month + ', ' + year;

console.log(formattedDate);

const filteredData = data.filter(day => day.day.toLowerCase() === curentDay.toLowerCase());
  return (
    <div>
    <div className='flex flex-row gap-1'> 
        <Sidebar2/>
        <div className='p-10 bg-gray-100 w-full '>    
        <h1 className='font-bold text-4xl text-blue-800 p-4 border-b-2 border-gray-400'>{formattedDate}</h1>
        <div >
            
          {filteredData?.length > 0 ? (
            filteredData.map(day => (
              <>
                <h2 className='m-5  text-3xl'>{day.day}</h2>
                <div className='flex flex-wrap gap-3 p-4' key={day.id} data-aos="fade-up">
                  {day.schedules.map(schedule => (
                    <CompBox
                      key={schedule.id}
                      subject={schedule.Subject}
                      time={schedule.classTime}
                      teacher={schedule.teacher}
                      classroom={schedule.classroom}
                    />
                  ))}
                </div>
              </>
            ))
          ) : (
            <p>No classes today.</p>
          )}
          </div>
        </div>
        </div>
    </div>
  )
}

export default Studashboard
