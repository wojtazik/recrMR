import { ISetLoading, SET_LOADING } from '../actions/actionTypes'

export function loadingReducer (state: boolean = false, action: ISetLoading) {
  switch (action.type) {
    case SET_LOADING:
      state = action.payload
      return state
    default:
      return state
  }
}