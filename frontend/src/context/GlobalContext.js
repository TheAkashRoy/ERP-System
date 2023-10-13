// src/context/GlobalContext.js
import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
  username: "",
  setUsername: () => "",
  token: "",
  setToken: () => "",
});

export const GlobalContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  return (
    <GlobalContext.Provider value={{ username, setUsername, token, setToken }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
