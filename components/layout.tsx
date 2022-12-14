import Head from "next/head";
import React from "react";
import { useCart } from "../hooks/useCart";
import Header from "./Header/Header";
type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  const { cartProducts } = useCart();
  return (
    <>
      <Head>
        <title>JooJ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        quantity={cartProducts.reduce(
          (count: number, current) => count + current.quantity,
          0
        )}
      />
      {children}
    </>
  );
}
