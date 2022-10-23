import Image from "next/image";
import { useCart } from "../../hooks/useCart";
import { ICartItem } from "../../types/CartType";

type PropType = {
  product: ICartItem;
};
export default function CartCard({ product }: PropType) {
  const { increaseFromCart, decreaseFromCart, removeFromCart } = useCart();
  return (
    <li
      data-testid="cartcard-component"
      className="flex border-b-2 border-gray-200"
    >
      <Image
        src={product.image}
        alt={product.description}
        width={100}
        height={100}
      />
      <div className="w-full">
        <h1>{product.title}</h1>
        <div className="flex items-center">
          <button
            onClick={() => decreaseFromCart(product)}
            className="px-2 rounded m-2 hover:bg-gray-300 bg-gray-100"
          >
            -
          </button>
          <span>{product.quantity}</span>
          <button
            onClick={() => increaseFromCart(product)}
            className="px-2 rounded m-2 hover:bg-gray-300 bg-gray-100"
          >
            +
          </button>
          <span className="font-semibold text-cyan-800">
            R$ {(product.price * product.quantity).toFixed(2)}
          </span>
          <button
            className="text-red-500 border ml-auto rounded border-red-400 p-1"
            onClick={() => removeFromCart(product)}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}
