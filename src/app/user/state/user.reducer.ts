import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UserState } from "./user.state";
import * as UserActions from './user.actions'

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
  on(UserActions.toggleMaskUserName, state => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
