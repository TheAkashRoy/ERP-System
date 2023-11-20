import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import RoutineBox from '../components/RoutineBox';
import data from '../components/routine.json'
function Dashboard() {
  //const [data, setData] = useState([]);
  const [error, setError] = useState("");
 //var data=[];
//  const fetchData = async () => {
//   try {
//     const response = await fetch("https://erpsystembe.akashroy24.repl.co/routine", {
//       method: "GET",
//     });

//     if (response.ok) {
//       const newData = await response.json();
//       console.log("New data from API:", newData);
//       setError("");
//       setData(newData);
//       console.log("Updated data state:", data);
//     } else {
//       setError("Login failed. Please check your username.");
//     }
//   } catch (error) {
//     setError("An error occurred while logging in.");
//   }
// };

// useEffect(() => {
//   fetchData();
// }, []);
  // Create a new Date object for the current date
var currentDate = new Date();

// Get the day, month, and year
var day = currentDate.getDate();
var month = currentDate.toLocaleString('default', { month: 'long' }); // 'long' gives the full month name
var year = currentDate.getFullYear();
var curentDay=currentDate.toLocaleString('default', { weekday: 'long' });
console.log(curentDay);
// Format the date as "Day Month Year"
var formattedDate = day + ' ' + month + ', ' + year;

console.log(formattedDate);

const filteredData = data.filter(day => day.day.toLowerCase() === curentDay.toLowerCase());

  return (
    <div>
      <div className='flex flex-row gap-1'> 
        <Sidebar/>
        <div className='p-10 bg-gray-100 w-full '>    
          <h1 className='font-bold text-4xl text-gray-600 p-4 border-b-2 border-gray-400'>{formattedDate}</h1>
          <div >
            
          {filteredData?.length > 0 ? (
            filteredData.map(day => (
              <>
                <h2 className='m-8  text-3xl'>{day.day}</h2>
                <div className='flex flex-wrap gap-4 p-4' key={day.id}>
                  {day.schedules.map(schedule => (
                    <RoutineBox
                      key={schedule.id}
                      subject={schedule.Subject}
                      time={schedule.classTime}
                      year={schedule.year}
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
  );
}

export default Dashboard;
