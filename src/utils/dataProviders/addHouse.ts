import axios, { AxiosResponse } from "axios"
import { API_ROOTS, API_URL } from "../../config/api"
import { AddHomeFormValues } from "../../models/formValues"

const addHouse = (house: AddHomeFormValues) => {
  return axios.post(API_URL + API_ROOTS.HOUSE, house)
  .then((response: AxiosResponse) => response?.data.results)
}

export { addHouse }