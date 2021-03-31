import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../product";
import { ProductState } from "./product.state";

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export * from './state';

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  state => state.currentProductId
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  getCurrentProductId,
  (state, currentProductId) => {
    let product: Product = null;
    if(currentProductId === 0) {
      product = {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0
      };
    } else {
      product = currentProductId ? state.products.find(p => p.id === currentProductId) : null
    }
    return product;
  }
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

export const getError = createSelector(
  getProductFeatureState,
  state => state.error
);
