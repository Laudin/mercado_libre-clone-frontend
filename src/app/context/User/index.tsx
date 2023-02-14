import React from 'react';
import { reducer, initialState } from './reducer'

export const UserContext = React.createContext({
  currentUser: initialState,
  dispatchUser: reducer
})

export const UserProvider = ({ children }) => {

  const [currentUser, dispatchUser] = React.useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ currentUser, dispatchUser }}>
      {children}
    </UserContext.Provider>
  )
}