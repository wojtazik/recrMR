import { IHouseDescriptor } from "../../models/houseDescriptorInterface";
import { Id } from "../../models/IdentifierType";
import { IState } from "../../models/state/stateInterface";

export const selectHousesIds = (state: IState) => {
  return state.houses?.reduce((houses: Id[], currentHouse: IHouseDescriptor): Id[] => [...houses, currentHouse._id], [])
}

export const selectHouseDescriptor = (state: IState, { houseId }: { houseId: Id }) => {
  return state.houses.find((house: IHouseDescriptor) => house._id === houseId) || null
}