// src/components/LoginForm.js
import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { Navigate } from "react-router-dom";
import Teacher from "./Teacher";
const LoginForm = () => {
  const { username, setUsername, token, setToken } = useGlobalContext();

  //const history = useHistory();
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
        <Navigate to="/teacher" replace={true} />
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
    <div className="flex flex-row gap-2 ">
    <div></div>
    <div>
    <button onClick={() => setIsLogin(!isLogin)}>
    {isLogin ? "Register" : "Login"}
  </button>
  {isLogin ? (
    <form className="">
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter your password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      />
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
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </form>
  ) : (
    <form className="">
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
      />
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
    </form>
  )}
  </div>
    </div>
  );
};

export default LoginForm;
