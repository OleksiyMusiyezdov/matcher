import { ActionType } from "./action-types";

export type Inputs = {
  firstFirstName: string;
  firstSecondName: string;
  secondFirstName: string;
  secondSecondName: string;
};

export interface IFilm {
  title: string;
  year?: number;
  url?: string;
}

export interface IState {
  isLoading: boolean;
  firstFirstName: string;
  firstSecondName: string;
  secondFirstName: string;
  secondSecondName: string;
  count: number;
  list?: Array<IFilm>;
  errorMessage?: string;
}

export interface ISendDataAction {
  type: ActionType.SEND_DATA;
  payload: Inputs;
}

export interface IGetDataLoadingAction {
  type: ActionType.GET_DATA_LOADING;
  payload: Inputs;
}

export interface IGetDefaultDataAction {
  type: ActionType.GET_DEFAULT_DATA;
}

export interface IGetResponseSuccessAction {
  type: ActionType.GET_DATA_SUCCESS;
  payload: {
    count: number;
    list?: Array<IFilm>;
  };
}

export interface IGetResponseFailAction {
  type: ActionType.GET_DATA_FAIL;
  payload: {
    errorMessage: string;
  };
}

export type IActions =
  | ISendDataAction
  | IGetDefaultDataAction
  | IGetDataLoadingAction
  | IGetResponseSuccessAction
  | IGetResponseFailAction;
