import { render } from "@testing-library/react";
import CartCard from "./CartCard";
import "@testing-library/jest-dom/extend-expect";
describe("<CartCard />", () => {
  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    quantity: 1,
  };
  it("should be rendered with correct props", () => {
    const { getByTestId } = render(<CartCard product={product} />);
    expect(getByTestId("cartcard-component")).toHaveTextContent(product.title);
    expect(getByTestId("cartcard-component")).toHaveTextContent(
      String(product.price)
    );
  });
});
