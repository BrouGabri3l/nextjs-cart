import { randomUUID } from "crypto";
import React, { useCallback, useReducer, useState } from "react";
import { createContext } from "use-context-selector";
import { cartReducer } from "../reducers/cartReducer";
import { ICartItem } from "../types/CartType";
import { Product } from "../types/ProductType";

export const INITIAL_STATE = {
  cartProducts: [] as ICartItem[],
};
export type CartContextType = typeof INITIAL_STATE;
export const CartContext = createContext({
  state: INITIAL_STATE,
  addToCart: (product: Product) => {},
  removeFromCart: (product: Product) => {},
  increaseFromCart: (product: ICartItem) => {},
  decreaseFromCart: (product: ICartItem) => {},
});
type Props = {
  children?: React.ReactNode;
};
const CartProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const addToCart = (product: Product) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
  };

  const removeFromCart = useCallback((product: Product) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: product,
    });
  }, []);

  const increaseFromCart = useCallback((product: ICartItem) => {
    dispatch({
      type: "INCREASE_PRODUCT",
      payload: product,
    });
  }, []);
  const decreaseFromCart = useCallback((product: ICartItem) => {
    dispatch({
      type: "DECREASE_PRODUCT",
      payload: product,
    });
  }, []);
  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        increaseFromCart,
        decreaseFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
