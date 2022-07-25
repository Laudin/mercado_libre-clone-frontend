export const reducer = (state, action) => {
  switch (action.type) {
    case "set_user":
      localStorage.setItem('name', action.name)
      localStorage.setItem('email', action.email)
      return {
        ...state,
        name: action.name,
        email: action.email
      }
    case "clear_user":
      localStorage.removeItem('name')
      localStorage.removeItem('email')
      return {
        ...state,
        name: '',
        email: ''
      }

    default:
      return state
  }
}

export interface user {
  name: string,
  email: string
}

export const initialState: user = {
  name: localStorage.getItem('name') as string,
  email: localStorage.getItem('email') as string
}