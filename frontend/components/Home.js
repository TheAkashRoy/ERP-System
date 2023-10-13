// src/components/LoginForm.js
import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const LoginForm = () => {
  const { username, setUsername, token, setToken } = useGlobalContext();
  const [inputUsername, setInputUsername] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    // Simulate an API call to get a token based on the username.
    // In a real application, you would replace this with an actual API call.
    try {
      const response = await fetch("your-api-endpoint-here", {
        method: "POST",
        body: JSON.stringify({ username: inputUsername }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setUsername(inputUsername);
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
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;
