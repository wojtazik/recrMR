import { IHouseDescriptor } from "../../models/houseDescriptorInterface"

export interface ISetLoading {
  type: string,
  payload: boolean
}

export interface ISetError {
  type: string,
  payload: string
}

export interface ISetHouses {
  type: string,
  payload: IHouseDescriptor[]
}

export const SET_HOUSES = 'SET_HOUSES'
export const SET_SELECTED_HOUSE = 'SET_SELECTED_HOUSE'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'

