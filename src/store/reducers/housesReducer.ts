import { IHouseDescriptor } from "../../models/houseDescriptorInterface"
import { ISetHouses, SET_HOUSES } from "../actions/actionTypes"

export function housesReducer (state: IHouseDescriptor[] = [], action: ISetHouses) {
  switch (action.type) {
    case SET_HOUSES:
      state = action.payload
      return state
    default:
      return state
  }
}