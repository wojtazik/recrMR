import { IHouseDescriptor } from "../houseDescriptorInterface";

export interface IState {
  houses: IHouseDescriptor[],
  error: string,
  isLoading: boolean
}