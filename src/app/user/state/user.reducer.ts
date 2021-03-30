import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UserState } from "./user.state";

const initialState: UserState = {
  maskUserName: false
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(createAction('[User] toggle mask username'), state => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
