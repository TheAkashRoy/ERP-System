import React from 'react'
import { useGlobalContext } from "../context/GlobalContext";
function Teacher() {
  const { username, setUsername, token, setToken } = useGlobalContext();
  return (
    <div>
    <h1>Username: {username}</h1>
    <h2> Helloooooo</h2>
    </div>
  )
}

export default Teacher
