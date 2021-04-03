import { useEffect } from "react"
import { Id } from "../../../models/IdentifierType"
import { useDataPersister, useDataProvider } from "./dataHook"

export interface ListHookInterface {
  housesIds: Id[]
  isRequestLoading: boolean
}

const useComponent = () => {
  const { housesIds, isRequestLoading } = useDataProvider()
  const { onGetHousesList } = useDataPersister()

  useEffect(() => {
    onGetHousesList()
  }, [])

  return {
    housesIds,
    isRequestLoading
  }
}

export default useComponent