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
}