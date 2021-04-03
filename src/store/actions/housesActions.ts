import { ISetHouses, SET_HOUSES } from "./actionTypes"
import { setLoading } from "./loadingActions"
import { getHouses as apiGetHouses } from '../../utils/dataProviders/getHouses'
import { IHouseDescriptor } from "../../models/houseDescriptorInterface"
import { Dispatch } from "redux"
import { IState } from "../../models/state/stateInterface"
import { Id } from "../../models/IdentifierType"
import { removeHouse as apiRemoveHouse } from '../../utils/dataProviders/removeHouse'
import { setError } from "./errorActions"
import { AddHomeFormValues } from "../../models/formValues"
import { addHouse as apiAddHouse } from '../../utils/dataProviders/addHouse'

export const setHouses = (payload: any[]): ISetHouses => {
  return {
    type: SET_HOUSES,
    payload: payload
  }
}

export const getHouses = () => {
  return async (dispatch: any, state: IState) => {
    dispatch(setLoading(true))

    return apiGetHouses()
      .then((response: IHouseDescriptor[]) => dispatch(setHouses(response)))
      .catch((error: string) => dispatch(setError(error)))
      .finally(() => dispatch(setLoading(false)))
  }
}

export const removeHouse = (id: Id) => {
  return async (dispatch: Dispatch, state: IState) => {
    dispatch(setLoading(true))

    apiRemoveHouse(id)
      .then(apiGetHouses)
      .then((response: IHouseDescriptor[]) => dispatch(setHouses(response)))
      .catch((error: string) => dispatch(setError(error)))
      .finally(() => dispatch(setLoading(false)))
  }
}

export const addHouse = (values: AddHomeFormValues) => {
  return async (dispatch: Dispatch, state: IState) => {
    dispatch(setLoading(true))

    apiAddHouse(values)
    .then(apiGetHouses)
    .then((response: IHouseDescriptor[]) => dispatch(setHouses(response)))
    .catch((error: string) => dispatch(setError(error)))
    .finally(() => dispatch(setLoading(false)))
  }
}