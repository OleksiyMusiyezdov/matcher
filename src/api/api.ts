import axios from "axios";
import { IGetDataRequest, IGetDataResponse } from "./api.interface";

export interface IApiResponse<T> {
  success: boolean;
  code: number;
  data: T;
}

export const getDataApi = async (
  req: IGetDataRequest
): Promise<IApiResponse<IGetDataResponse>> => {
  const host = "http://localhost:3001";

  for (let [key, value] of Object.entries(req)) {
    if (value.includes(" ")) {
      /* @ts-ignore:next-line */
      req[key] = value.replace(" ", "%20");
    }
  }

  const { data } = await axios.get<IApiResponse<IGetDataResponse>>(
    `${host}/?firstFirstName=${req.firstFirstName}&firstSecondName=${req.firstSecondName}&secondFirstName=${req.secondFirstName}&secondSecondName=${req.secondSecondName}`
  );
  return data;
};
