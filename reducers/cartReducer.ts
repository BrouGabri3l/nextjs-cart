import { INITIAL_STATE, CartContextType } from "../context/CartContext";
import { IAction } from "../interfaces/IAction";

export const cartReducer = (
  state = INITIAL_STATE,
  action: IAction
): CartContextType => {
  let tmpState = { ...state };
  switch (action.type) {
    case "ADD_PRODUCT": {
      const itemIndex = tmpState.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        tmpState.cartProducts[itemIndex].quantity++;
      } else {
        tmpState.cartProducts.push({ ...action.payload, quantity: 1 });
      }
      break;
    }
    case "INCREASE_PRODUCT": {
      const itemIndex = tmpState.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      tmpState.cartProducts[itemIndex].quantity++;
      break;
    }
    case "DECREASE_PRODUCT": {
      const itemIndex = tmpState.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (tmpState.cartProducts[itemIndex].quantity > 1)
        tmpState.cartProducts[itemIndex].quantity--;
      break;
    }
    case "REMOVE_PRODUCT": {
      const itemIndex = tmpState.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      tmpState.cartProducts.splice(itemIndex, 1);
      break;
    }
    default:
      throw new Error();
  }
  return tmpState;
};
