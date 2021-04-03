import { Id } from "./IdentifierType";

export interface IHouseDescriptor {
  _id: Id,
  address?: string,
  floorsNumber?: number,
  description?: string,
  label?: string,
  createdAt: string,
  updatedAt: string,
  __v: number
}