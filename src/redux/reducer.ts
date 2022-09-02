import { Reducer } from "redux";

import { ActionType } from "./action-types";
import { IActions, IState } from "./interfaces";

const defaultState: IState = {
  isLoading: false,
  firstFirstName: "Dustin",
  firstSecondName: "Hoffman",
  secondFirstName: "Meryl",
  secondSecondName: "Streep",
  count: 0,
  list: [],
  errorMessage: "",
};

export const reducer: Reducer<IState, IActions> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case ActionType.GET_DATA_LOADING: {
      const {
        firstFirstName,
        firstSecondName,
        secondFirstName,
        secondSecondName,
      } = action.payload;
      return {
        ...state,
        firstFirstName: firstFirstName,
        firstSecondName: firstSecondName,
        secondFirstName: secondFirstName,
        secondSecondName: secondSecondName,
        isLoading: true,
      };
    }
    case ActionType.GET_DATA_SUCCESS: {
      const { count, list } = action.payload;
      return {
        ...state,
        count: count,
        list: list,
        isLoading: false,
      };
    }
    case ActionType.GET_DATA_FAIL: {
      // const { errorMessage } = action.payload;
      console.log(action.payload);
      return {
        ...state,
        // errorMessage: errorMessage,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
