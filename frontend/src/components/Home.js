// src/components/LoginForm.js
import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const LoginForm = () => {
  const { username, setUsername, token, setToken } = useGlobalContext();
 // const [inputUsername, setInputUsername] = useState("");
 const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [designation, setDesignation] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("inside handleRegister");
    try {
      const response = await fetch("https://erpsystembe.akashroy24.repl.co/register", {
        method: "POST",
        body: JSON.stringify({ username: username,password:inputPassword }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("data from response",data);
        // setToken(data.token);
        // setUsername(inputUsername);
        setError("");
      } else {
        setError("Login failed. Please check your username.");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("inside handleRegister");
    try {
      const response = await fetch("https://erpsystembe.akashroy24.repl.co/login", {
        method: "POST",
        body: JSON.stringify({ username: username,password:inputPassword,designation:designation }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("data from response",data);
        // setToken(data.token);
        // setUsername(inputUsername);
        setError("");
      } else {
        setError("Login failed. Please check your username.");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
    }
  };
  return (
    <div>
        <form className="flex flex-col gap-3  w-76">
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      /><br/>
      <label>
        Designation:
        <select value={designation} onChange={(e) => setDesignation(e.target.value)}>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </select>
      </label>
      <button type="submit" onClick={(e)=>{handleRegister(e)}}>Register</button>
    </form>
      <br/>
      <h1>OR</h1>
      <br/>
      <form className="flex flex-col gap-4 w-80 m-10">
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <input
        type="password"
        placeholder="Enter your password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      />
      <br/>
      <label>
        Designation:
        <select value={designation} onChange={(e) => setDesignation(e.target.value)}>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </select>
      </label>
      <button type="submit" onClick={(e)=>{handleLogin(e)}}>Login</button>

    </form>
    
    </div>
  );
};

export default LoginForm;
