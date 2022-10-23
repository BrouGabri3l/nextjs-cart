import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom/extend-expect";

describe("<Header/>", () => {
  it("should be rendered with correct cart items quantity", () => {
    const itemQuantity = 3;
    const { getByRole } = render(<Header quantity={itemQuantity} />);
    expect(getByRole("banner")).toHaveTextContent(String(itemQuantity));
  });
});
