import Link from "next/link";

type PropType = {
  quantity: number;
};
export default function Header({ quantity }: PropType) {
  return (
    <header>
      <span>Contador: {quantity}</span>
      <Link href="/Cart">Cart</Link>
    </header>
  );
}
