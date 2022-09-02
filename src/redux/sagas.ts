import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { IGetDataResponse } from "../api/api.interface";
import { getDataApi } from "../api/api";
import { IGetDataLoadingAction } from "./interfaces";
import { getDataSuccess } from "./actions";

import { mockResponse } from "../mock/mock-http-response";

function* fetchData(action: IGetDataLoadingAction) {
  try {
    const data: IGetDataResponse = yield call(getDataApi, action.payload);

    // const data: IGetDataResponse = mockResponse;

    yield put(getDataSuccess(data.count, data.list));
  } catch (e) {
    yield put({ type: "GET_DATA_FAIL", errorMessage: "Something went wrong" }); // e.message
  }
}

export function* mySaga() {
  yield takeEvery("GET_DATA_LOADING", fetchData);
}
