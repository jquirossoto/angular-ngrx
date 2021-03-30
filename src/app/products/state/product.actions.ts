import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export const toggleProductCode = createAction('[Product] toggle product code');

export const setCurrentProduct = createAction(
  '[Product] set current product',
  props<{ product: Product }>()
);

export const clearCurrentProduct = createAction(
  '[Product] clear current product'
);

export const initializeCurrentProduct = createAction(
  '[Product] initialize current product'
);

export const loadProducts = createAction(
  '[Product] load products'
);

export const loadProductsSuccess = createAction(
  '[Product] load products success',
  props<{ products: Product[] }>()
)

export const loadProductsFailure = createAction(
  '[Product] load products failure',
  props<{ error: string }>()
)
