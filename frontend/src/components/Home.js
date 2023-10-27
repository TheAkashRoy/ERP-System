// src/components/LoginForm.js
import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import Teacher from "./Teacher";
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
        // setUsername(inputUsername);
        setError("");
        navigate("/teacher");
      } else {
        setError("Login failed. Please check your username.");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    //console.log("inside handleRegister");
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
    <div className="flex flex-col lg:flex-row gap-2 justify-center items-center m-10 lg:m-20">
    <div className="w-[55%] lg:w-[40%]">
    <img src={login}></img>
    </div>
    <div className="shadow-md border-2 rounded-xl p-6 w-[80%] lg:w-[48%]">
    
  {isLogin ? (
    <form className="flex flex-col gap-3">
      <label>
        Username
        <br/>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </label>
      <label>
      Password <br/>
      <input
        type="password"
        placeholder="Enter your password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      />
      </label>
      <label>
        Designation<br/>
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
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
      <button onClick={() => setIsLogin(!isLogin)} className="p-2 text-white bg-blue-700 rounded-xl">
    {isLogin ? "Register" : "Login"}
  </button>
    </form>
  ) : (
    <form className="flex flex-col gap-1">
    <label>
    Username <br/>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /></label>
      <label>
      Password <br/>
      <input
        type="password"
        placeholder="Enter your password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      /></label>
      <br />
      <label>
        Designation:
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
      <button type="submit" onClick={handleRegister}>
        Register
      </button>
      <button onClick={() => setIsLogin(!isLogin)} className="p-2 text-white bg-blue-700 rounded-lg">
    {isLogin ? "Register" : "Login"}
  </button>
    </form>
  )}
  </div>
    </div>
  );
};

export default LoginForm;
