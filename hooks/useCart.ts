import { useContextSelector } from "use-context-selector";
import { CartContext } from "../context/CartContext";

export function useCart() {
  const cartProducts = useContextSelector(
    CartContext,
    (context) => context.state.cartProducts
  );
  const addToCart = useContextSelector(
    CartContext,
    (context) => context.addToCart
  );
  const removeFromCart = useContextSelector(
    CartContext,
    (context) => context.removeFromCart
  );
  const increaseFromCart = useContextSelector(
    CartContext,
    (context) => context.increaseFromCart
  );
  const decreaseFromCart = useContextSelector(
    CartContext,
    (context) => context.decreaseFromCart
  );
  return {
    cartProducts,
    addToCart,
    removeFromCart,
    increaseFromCart,
    decreaseFromCart,
  };
}
