import { ISetLoading, SET_LOADING } from "./actionTypes";

export const setLoading = (payload: boolean): ISetLoading => {
  return {
    type: SET_LOADING,
    payload
  }
}