import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../hooks/useCart";
import { Product } from "../../types/ProductType";

type PropType = {
  product: Product;
};

export default function ProductCard({ product }: PropType) {
  const { addToCart } = useCart();
  return (
    <Link href={`/products/${product.id}`}>
      <li
        data-testid="productcard-component"
        className="flex border border-gray-200 rounded justify-between flex-col min-w-[300px] max-w-sm p-2"
      >
        <h2 className="font-semibold text-md text-gray-800">{product.title}</h2>
        <div className="h-48 relative m-2">
          <Image
            src={product.image}
            layout="fill"
            objectFit="contain"
            alt={product.description}
          ></Image>
        </div>
        <footer className="flex items-center justify-between p-2">
          <span className="font-semibold text-gray-700">
            R$ {product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-cyan-400 rounded px-4 py-2 hover:bg-cyan-500 text-gray-900"
          >
            Add To Cart
          </button>
        </footer>
      </li>
    </Link>
  );
}
