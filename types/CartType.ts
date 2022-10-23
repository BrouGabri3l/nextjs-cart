import { Product } from "./ProductType";

export interface ICartItem extends Product {
  quantity: number;
}
