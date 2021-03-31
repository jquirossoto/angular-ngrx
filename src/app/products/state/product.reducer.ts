import { createReducer, on } from "@ngrx/store";
import { ProductState } from "./product.state";
import { ProductPageActions, ProductAPIActions } from './actions';

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: ''
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductPageActions.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  }),
  on(ProductPageActions.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProductId: action.currentProductId
    };
  }),
  on(ProductPageActions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: null
    };
  }),
  on(ProductPageActions.initializeCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: 0
    };
  }),
  on(ProductAPIActions.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      error: '',
      products: action.products
    };
  }),
  on(ProductAPIActions.loadProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error
    };
  }),
  on(ProductAPIActions.updateProductSuccess, (state, action): ProductState => {
    const updateProducts = state.products.map(product => product.id === action.product.id ? action.product : product);
    return {
      ...state,
      error: '',
      currentProductId: action.product.id,
      products: updateProducts
    };
  }),
  on(ProductAPIActions.updateProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(ProductAPIActions.createProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      error: '',
      currentProductId: action.product.id,
      products: [...state.products, action.product]
    };
  }),
  on(ProductAPIActions.createProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(ProductAPIActions.deleteProductSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: state.products.filter(product => product.id !== action.productId),
      currentProductId: null,
      error: ''
    };
  }),
  on(ProductAPIActions.deleteProductFailure, (state, action): ProductState => {
    return {
      ...state,
      error: action.error
    };
  })
);
