import {AccessTokenModels} from './acces-token.models';

export interface  UserModel{
  token:AccessTokenModels
  "fullName": string,
  "email": string,
  "createdAt"?: Date,
  "updatedAt"?: Date,
  "initials"?: string
}
