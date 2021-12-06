
import { all } from '@redux-saga/core/effects'
import DashboardSagas from '../Pages/Dashboard/Sagas'

export default function* rootSaga () {
    yield all([
      ...DashboardSagas
    ]);
}