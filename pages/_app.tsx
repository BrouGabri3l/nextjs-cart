import "../styles/globals.css";
import type { AppProps } from "next/app";
import ProductProvider from "../context/CartContext";
import Layout from "../components/layout";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  );
}

export default MyApp;
