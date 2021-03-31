import { createAction, props } from "@ngrx/store";
import { Product } from "../../product";

export const loadProductsSuccess = createAction(
  '[Product API] load products success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product API] load products failure',
  props<{ error: string }>()
);

export const updateProductSuccess = createAction(
  '[Product API] update product success',
  props<{ product: Product } >()
);

export const updateProductFailure = createAction(
  '[Product API] update product failure',
  props<{ error: string } >()
);

export const createProductSuccess = createAction(
  '[Product API] create product success',
  props<{ product: Product } >()
);

export const createProductFailure = createAction(
  '[Product API] create product failure',
  props<{ error: string } >()
);

export const deleteProductSuccess = createAction(
  '[Product API] Delete Product Success',
  props<{ productId: number }>()
);

export const deleteProductFailure = createAction(
  '[Product API] Delete Product Fail',
  props<{ error: string }>()
);
