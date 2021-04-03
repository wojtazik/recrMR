import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AddHomeFormValues } from "../../models/formValues";
import { addHouse } from "../../store/actions/housesActions";

export type DataPersisterHookInterface = {
  onAddHouse: (values: AddHomeFormValues) => void
}

export const useDataPersister = (): DataPersisterHookInterface => {
  const dispatch = useDispatch()
  
  return {
    onAddHouse: (values: AddHomeFormValues) => dispatch(addHouse(values))
  }
}