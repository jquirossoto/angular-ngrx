import { Product } from "../product";

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}
