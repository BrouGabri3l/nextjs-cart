import { NextPage } from "next";
import CartCard from "../components/CartCard/CartCard";
import CartCheckout from "../components/CartCheckout/CartCheckout";
import { useCart } from "../hooks/useCart";

const Cart: NextPage = () => {
  const { cartProducts } = useCart();
  return (
    <>
      <h1>Shopping Cart</h1>
      <main className="flex float-right w-full p-3 justify-between gap-4 ">
        <ul data-testid="cartcard-component" className="basis-1/2">
          {cartProducts.map((product, key) => {
            return <CartCard key={key} product={product} />;
          })}
        </ul>
        <CartCheckout products={cartProducts} />
      </main>
    </>
  );
};
export default Cart;
