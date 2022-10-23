import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import { useProduct } from "../../hooks/useCart";
import { Product } from "../../types/ProductType";

interface IParams extends ParsedUrlQuery {
  id: string;
}
export default function ProductPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { addToCart } = useProduct();
  return (
    <div className="border bg-gray-100 border-gray-200 rounded  flex flex-row items-stretch justify-around">
      <div className="pr-4">
        <Image
          src={product.image}
          alt={product.description}
          width={400}
          height={400}
        />
      </div>
      <section className="flex justify-around max-w-md  flex-col">
        <h2 className="text-lg font-bold uppercase">{product.title}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-800">
            R$ {product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-cyan-400 rounded px-4 py-2 hover:bg-cyan-500 text-gray-900"
          >
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products?limit=4");
  const data: Product[] = await res.json();
  const paths = data.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  const product: Product = await res.json();
  return {
    props: { product },
  };
};
