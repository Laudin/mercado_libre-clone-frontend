import { User } from '../../../types'

export const reducer = (state, action?) => {
  console.log(action)
  switch (action.type) {
    case "set_user":
      //localStorage.setItem('id', action.id)
      localStorage.setItem('name', action.name)
      localStorage.setItem('email', action.email)

      document.cookie = `id=${action.id}; max-age=${30 * 24 * 60 * 60}; Secure` //sets User Id 
      return {
        ...state,
        id: action.id,
        name: action.name,
        email: action.email
      }
    case "clear_user":
      //localStorage.removeItem('id')
      localStorage.removeItem('name')
      localStorage.removeItem('email')

      document.cookie = `id=${action.id}; expires=Thu, 01 Jan 1970 00:00:01 GMT"; max-age=${0}; Secure` // "kills" the cookie x_x
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
  // id: localStorage.getItem('id') as string,
  id: document.cookie.split(';').find((x: String) => x.match("id="))?.split("=")[1],
  name: localStorage.getItem('name') as string,
  email: localStorage.getItem('email') as string
}