import { User } from '../../../types'

export const reducer = (state, action) => {
  switch (action.type) {
    case "set_user":
      localStorage.setItem('id', action.id)
      localStorage.setItem('name', action.name)
      localStorage.setItem('email', action.email)
      return {
        ...state,
        id: action.id,
        name: action.name,
        email: action.email
      }
    case "clear_user":
      localStorage.removeItem('id')
      localStorage.removeItem('name')
      localStorage.removeItem('email')
      return {
        ...state,
        id: '',
        name: '',
        email: ''
      }

    default:
      return state
  }
}

export const initialState: User = {
  id: localStorage.getItem('id') as string,
  name: localStorage.getItem('name') as string,
  email: localStorage.getItem('email') as string
}