import axios, { AxiosResponse } from "axios"
import { API_ROOTS, API_URL } from "../../config/api"
import { Id } from "../../models/IdentifierType"

const getHousesDetails = (id: Id) => {
  return axios.get(API_URL + API_ROOTS.HOUSE.replace('{id}', id))
  .then((response: AxiosResponse) => response?.data.results)
}

export { getHousesDetails }