import axios, { AxiosResponse } from "axios"
import { API_ROOTS, API_URL } from "../../config/api"

const getHouses = () => {
  return axios.get(API_URL + API_ROOTS.HOUSES_LIST)
  .then((response: AxiosResponse) => response?.data.results)
}

export { getHouses }