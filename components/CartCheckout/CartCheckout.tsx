import { ICartItem } from "../../types/CartType";

type PropType = {
  products: ICartItem[];
};
export default function CartCheckout({ products }: PropType) {
  return (
    <aside
      data-testid="CartCheckout-component"
      className="basis-1/3 flex flex-col "
    >
      <h2>Order Summary</h2>
      <div className="flex justify-between">
        <span>SubTotal</span>
        <span className="font-semibold">
          R$
          {products.reduce(
            (count: number, current) =>
              count + current.quantity * current.price,
            0
          )}
        </span>
      </div>
      <p className="font-bold">
        Total: R$
        {products.reduce(
          (count: number, current) => count + current.quantity * current.price,
          0
        )}
      </p>
      <button className="rounded bg-cyan-400 py-2">Checkout</button>
    </aside>
  );
}
