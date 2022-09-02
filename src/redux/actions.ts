import { ActionType } from "./action-types";
import { IActions, IFilm } from "./interfaces";

export const sendDataAction = (
  firstFirstName: string,
  firstSecondName: string,
  secondFirstName: string,
  secondSecondName: string
): IActions => ({
  type: ActionType.SEND_DATA,
  payload: {
    firstFirstName,
    firstSecondName,
    secondFirstName,
    secondSecondName,
  },
});

export const getDefaultDataAction = (): IActions => ({
  type: ActionType.GET_DEFAULT_DATA,
});

export const getDataAction = (
  firstFirstName: string,
  firstSecondName: string,
  secondFirstName: string,
  secondSecondName: string
): IActions => ({
  type: ActionType.GET_DATA_LOADING,
  payload: {
    firstFirstName,
    firstSecondName,
    secondFirstName,
    secondSecondName,
  },
});

export const getDataSuccess = (
  count: number,
  list: Array<IFilm>
): IActions => ({
  type: ActionType.GET_DATA_SUCCESS,
  payload: {
    count,
    list,
  },
});

export const getDataFail = (errorMessage: string): IActions => ({
  type: ActionType.GET_DATA_FAIL,
  payload: { errorMessage },
});
