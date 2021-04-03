import { combineReducers } from 'redux'
import { errorReducer } from './errorReducer'
import { housesReducer } from './housesReducer'
import { loadingReducer } from './loadingReducer'

export default combineReducers({
  houses: housesReducer,
  error: errorReducer,
  isLoading: loadingReducer
})