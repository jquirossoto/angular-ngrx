import { createAction, props } from "@ngrx/store";
import { Product } from "../../product";

export const toggleProductCode = createAction('[Product Page] toggle product code');

export const setCurrentProduct = createAction(
  '[Product Page] set current product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[Product Page] clear current product'
);

export const initializeCurrentProduct = createAction(
  '[Product Page] initialize current product'
);

export const loadProducts = createAction(
  '[Product Page] load products'
);

export const updateProduct = createAction(
  '[Product Page] update product',
  props<{ product: Product } >()
);

export const createProduct = createAction(
  '[Product Page] create product',
  props<{ product: Product } >()
);

export const deleteProduct = createAction(
  '[Product Page] Delete Product',
  props<{ productId: number }>()
);
