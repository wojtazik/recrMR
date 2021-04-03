import { MouseEventHandler, useCallback } from "react"
import { useHistory } from "react-router"
import { ROUTES } from "../../config/routes"
import { IHouseDescriptor } from "../../models/houseDescriptorInterface"
import { useDataPersister, useDataProvider } from "./dataHooks"
import { HouseListItemInterface } from './HouseListItem'

export interface HouseListItemHookInterface {
  houseDescriptor: IHouseDescriptor
  onGoToHouseDetails: VoidFunction
  onHouseRemove: MouseEventHandler
}

const useComponent = (props: HouseListItemInterface) => {

  const history = useHistory()
  const { houseDescriptor } = useDataProvider(props) 
  const { onRemoveHouse } = useDataPersister(props)

  const onGoToHouseDetails = useCallback(() => {
    history.push(ROUTES.HOUSE_DETAILS.replace(':id', props.id))
  }, [history, props.id])

  const onHouseRemove = useCallback(() => {
    onRemoveHouse()
  }, [props.id])

  return {
    houseDescriptor,
    onGoToHouseDetails,
    onHouseRemove
  }
}

export default useComponent