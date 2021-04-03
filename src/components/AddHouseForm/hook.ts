import { FormikProps, useFormik } from "formik"
import { useHistory } from "react-router"
import { ROUTES } from "../../config/routes"
import { AddHomeFormValues } from "../../models/formValues"
import { useDataPersister } from "./dataHook"

export interface AddHouseFormHookInterface {
  formik: FormikProps<AddHomeFormValues>
}

const useComponent = () => {

  const { onAddHouse } = useDataPersister()
  const history = useHistory()
  
  const formik: FormikProps<AddHomeFormValues> = useFormik({
    initialValues: {
      address: '',
      floorsNumber: 0,
      description: '',
      label: ''
    },
    onSubmit: (values: AddHomeFormValues) => {
      onAddHouse(values)
      history.push(ROUTES.HOUSES)
    }
  })

  return {
    formik
  }
}

export default useComponent