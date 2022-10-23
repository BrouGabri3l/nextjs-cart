import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ProductCard from "../components/ProductCard/ProductCard";
import { Product } from "../types/ProductType";

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <ul className="flex gap-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products?limit=4");
  const products: Product[] = await res.json();
  return {
    props: { products },
  };
}
