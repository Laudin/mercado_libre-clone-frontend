import * as api from '../../api/usersApi'

export const reducer = (state, action?) => {
  switch (action.type) {
    case "initialize":
      if (action.initialValue) {
        return [action.initialValue]
      }
      return [...state]
    case "set_cart":
      api.addCart(action.product)
      return [...state, action.product]
    case "delete_from_cart":
      // delete product from cart
      return []

    default:
      return state
  }
}

export const initialState: string[] = []