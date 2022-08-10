import * as api from '../../api/usersApi'

export const reducer = (state, action: { type: "initialize" | "set_cart" | "delete_from_cart", product: string, initialValue?: string[] }) => {
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