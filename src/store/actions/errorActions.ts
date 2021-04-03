import { ISetError, SET_ERROR } from "./actionTypes";

export const setError = (payload: string): ISetError => {
  return {
    type: SET_ERROR,
    payload
  }
}