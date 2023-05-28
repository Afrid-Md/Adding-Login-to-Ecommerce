import React, { useState } from "react";
import AuthContext from "./Auth-context";

const AuthContextProvider=(props)=> {
  const initialToken=localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logInHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);

    setTimeout(()=>{
      localStorage.clear();
      authcontextValue.logout();
    },3600000);
  };

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };


  const authcontextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logOutHandler,
  };

  return (
    <AuthContext.Provider value={authcontextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
