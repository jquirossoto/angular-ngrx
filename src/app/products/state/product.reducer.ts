import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { ProductState } from "./product.state";

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
}

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

export const productReducer = createReducer<ProductState>(
  initialState,
  on(createAction('[Product] toggle product code'), (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);
