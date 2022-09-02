import { IState } from "./interfaces";

export const allDataSelector = (state: IState): any => state;

export const isLoadingSelector = (state: IState): boolean => state.isLoading;
