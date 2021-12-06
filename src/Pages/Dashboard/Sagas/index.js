import { fork } from 'redux-saga/effects'
import { watchMain } from './dashMainSaga'

export default [
    fork(watchMain)
]