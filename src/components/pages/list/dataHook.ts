import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Id } from "../../../models/IdentifierType"
import { getHouses } from "../../../store/actions/housesActions"
import { selectHousesIds } from "../../../store/selectors/housesSelectors"
import { selectIsLoading } from "../../../store/selectors/loadingSelectors"

export type DataProviderHookInterface = {
  housesIds: Id[],
  isRequestLoading: boolean
}

export type DataPersisterHookInteface = {
  onGetHousesList: VoidFunction
}

export const useDataProvider = (): DataProviderHookInterface => {
  const housesIds = useSelector(selectHousesIds)
  const isRequestLoading = useSelector(selectIsLoading)

  return { housesIds, isRequestLoading }
}

export const useDataPersister = (): DataPersisterHookInteface => {
  const dispatch = useDispatch()
  
  return {
    onGetHousesList: useCallback(() => dispatch(getHouses()), [dispatch])
  }
}