import { IFilm } from "../redux/interfaces";

export interface IGetDataResponse {
  count: number;
  list: Array<IFilm>;
}

export interface IGetDataRequest extends IGetDataRequestPath {}

export interface IGetDataRequestPath {
  firstFirstName: string;
  firstSecondName: string;
  secondFirstName: string;
  secondSecondName: string;
}
