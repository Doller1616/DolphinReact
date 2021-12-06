import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { FETCH_DATA, receiveDataSuccessfully,receiveDataFailed } from "../Action/dashMainAction";
import { fetchDataServices } from "../Services/dashMainService";


function* getApiData(payload) {
  try {
    const data = yield call(fetchDataServices);
    yield put(receiveDataSuccessfully(data)); // dispatch result
  } catch (e) {
    console.log(e);
    receiveDataFailed(e)
  }
}

export function* watchMain() {
  yield takeLatest(FETCH_DATA, getApiData);
}