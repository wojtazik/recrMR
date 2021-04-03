import axios, { AxiosResponse } from "axios"
import { API_ROOTS, API_URL } from "../../config/api"
import { Id } from "../../models/IdentifierType"

const removeHouse = (id: Id) => {
  return axios.delete(API_URL + API_ROOTS.HOUSE.replace('{id}', id))
  .then((response: AxiosResponse) => response?.data.results)
}

export { removeHouse }