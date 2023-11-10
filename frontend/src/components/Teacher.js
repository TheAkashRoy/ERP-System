import React from 'react'
import { useGlobalContext } from "../context/GlobalContext";
import Box from './RoutineBox';
function Teacher() {
  const { username, setUsername, token, setToken } = useGlobalContext();
  return (
    <div>
    <h1>Username: {username}</h1>
    <h2> Helloooooo</h2>
    <Box subject="Math" time="10:00-11:00" code="123" period="1"/>
    </div>
  )
}

export default Teacher
