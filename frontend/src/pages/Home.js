// src/components/LoginForm.js
import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import login from "../assets/Login.jpg";
const LoginForm = () => {
  const { username, setUsername, token, setToken } = useGlobalContext();

  //const history = useHistory();
 const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [designation, setDesignation] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    //console.log("inside handleRegister");
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
         setUsername(username);
        setError("");
       window.location.reload();
      } else {
        setError("Login failed. Please check your username.");
      }
    } catch (error) {
      setError("An error occurred while registering.");
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    //console.log("inside handleRegister");
    console.log("username",username);
    console.log("password",inputPassword);
    console.log("designation",designation);
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
         setToken(data.token);
         //setUsername(username);
        setError("");
        if(token && designation === "Teacher"){
          navigate("/teacher");
        }
        else if(token && designation === "Student"){
          navigate("/student");
        }

      } else {
        setError("Login failed. Please check your username.");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
    }
  };
  return (
    <div className="flex flex-col lg:flex-row gap-2 justify-center items-center m-10 lg:m-20">
    <div className="w-[55%] lg:w-[40%]">
    <img src={login}></img>
    </div>
    <div className="shadow-md border-2 rounded-xl p-6 w-[80%] lg:w-[39%]">
    
  {isLogin ? (
    <form className="flex flex-col gap-3">
      <label className="font-semibold text-lg">
        Username
        <br/>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border-2 border-blue-900 rounded-lg p-2 w-[90%]"
      />
      </label>
      <label className="font-semibold text-lg"> 
      Password <br/>
      <input
        type="password"
        placeholder="Enter your password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        className="border-2 border-blue-900 rounded-lg p-2 w-[90%]"
      />
      </label>
      <label className="font-semibold text-lg">
        Designation:<br/>
        <div className="mr-4">
        <input
  type="radio"
  id="teacher"
  name="designation"
  value="Teacher"
  checked={designation === "Teacher"}
  onChange={() => setDesignation("Teacher")}
  
/>
<label htmlFor="teacher ">Teacher</label>
</div>

<div>
<input
  type="radio"
  id="student"
  name="designation"
  value="Student"
  checked={designation === "Student"}
  onChange={() => setDesignation("Student")}
/>
<label htmlFor="student">Student</label>
</div>
      </label>
      
      <button type="submit" onClick={handleLogin} className="p-2 text-white bg-blue-700 rounded-xl w-[80%] shadow-lg font-semibold mb-5">
        Login
      </button>
      
    </form>
  ) : (
    <form className="flex flex-col gap-1">
    <label className="font-semibold text-lg">
    Username 
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border-2 border-blue-900 rounded-lg p-2 w-[90%]"

      /></label>
      <label className="font-semibold text-lg">
      Password <br/>
      <input
        type="password"
        placeholder="Enter your password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        className="border-2 border-blue-900 rounded-lg p-2 w-[90%]"

      /></label>
      <br />
      <label className="font-semibold text-lg">
        Designation:<br/>
        <input
  type="radio"
  id="teacher"
  name="designation"
  value="Teacher"
  checked={designation === "Teacher"}
  onChange={() => setDesignation("Teacher")}
/>
<label htmlFor="teacher">Teacher</label>

<input
  type="radio"
  id="student"
  name="designation"
  value="Student"
  checked={designation === "Student"}
  onChange={() => setDesignation("Student")}
/>
<label htmlFor="student">Student</label>

      </label>
      <button type="submit" onClick={handleRegister} className="p-2 text-white bg-blue-700 rounded-xl w-[80%] shadow-lg font-semibold mb-5">
        Register
      </button>
    </form>
  )}
  <p className="mb-2 ">{isLogin ? "If not registered,register below " : "If registered login below"}</p>
  <button onClick={() => setIsLogin(!isLogin)} className="p-2 text-blue-700 border-2 border-blue-700 font-semibold w-[80%] rounded-xl shadow-lg">
    {isLogin ? "Register" : "Login"}
  </button> 
  </div>
    </div>
  );
};

export default LoginForm;
