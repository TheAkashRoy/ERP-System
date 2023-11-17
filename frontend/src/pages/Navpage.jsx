import React from 'react'
import {Routes,Route} from "react-router-dom"
import QuestionForm from '../components/Question'
import Dashboard from './Dashboard'
function Navpage() {
  return (
    <>
    
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/teacher-dashboard" element={<Dashboard/>}/>
      <Route path="/update-question" element={<Question/>}/>
      </Routes>

    </>
        
  )
}

export default Navpage
