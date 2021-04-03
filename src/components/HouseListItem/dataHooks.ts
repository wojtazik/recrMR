import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IHouseDescriptor } from "../../models/houseDescriptorInterface"
import { IState } from "../../models/state/stateInterface"
import { removeHouse } from "../../store/actions/housesActions"
import { selectHouseDescriptor } from "../../store/selectors/housesSelectors"
import { HouseListItemInterface } from "./HouseListItem"

export type DataProviderHookInterface = {
  houseDescriptor: IHouseDescriptor | null
}

export type DataPersisterHookInterface = {
  onRemoveHouse: VoidFunction
}

export const useDataProvider = (props: HouseListItemInterface): DataProviderHookInterface => {
  const houseDescriptor = useSelector((state: IState) => selectHouseDescriptor(state, { houseId: props.id}))

  return { houseDescriptor }
}

export const useDataPersister = (props: HouseListItemInterface): DataPersisterHookInterface => {
  const dispatch = useDispatch()
  
  return {
    onRemoveHouse: useCallback(() => dispatch(removeHouse(props.id)), [dispatch, props.id])
  }
}