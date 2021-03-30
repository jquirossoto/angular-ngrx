import { createAction, createReducer, on } from "@ngrx/store";

export const productReducer = createReducer(
  { showProductCode: true },
  on(createAction('[Product] toggle product code'), state => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);
