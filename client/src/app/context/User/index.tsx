import { current } from '@reduxjs/toolkit';
import React from 'react';
import { reducer, initialState } from './reducer'

export const UserContext = React.createContext({
  currentUser: initialState,
  dispatch: reducer
})

export const UserProvider = ({ children }) => {
  
  const [currentUser, dispatch] = React.useReducer(reducer, initialState);
  
  return (
    <UserContext.Provider value={{currentUser, dispatch}}>
      {children}
    </UserContext.Provider>
  )
  /* const getUser = () => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    //const userToken = JSON.stringify(tokenString as string); //pff alpedo
    //console.log(tokenString);
    return {
      name: name,
      email: email
    };
  };
   const saveUser = (name, email) => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    setCurrentUser({
      name: name,
      email: email
    });
  }; */



  /* return {
    setCurrentUser: saveUser,
    currentUser,
  }; */
}