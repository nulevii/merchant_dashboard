import { takeEvery, call, put, select, CallEffect, PutEffect, SelectEffect } from 'redux-saga/effects'

import {
  GET_STORE_FETCH, GET_STORE_SUCCESS,
  GET_GMAIL_FETCH, GET_GMAIL_SUCCESS,
  POST_REGISTER_SUCCESS
} from './action-types'
import { getStore, getGmail, postRegister } from '../utilities/api_calls'
import { AccountInfoInterface } from './interfaces'
import { InitialStateInterface } from './reducer'

function * workGetStoreFetch (): Generator<CallEffect<void> | PutEffect<{
  type: string
}>, void, unknown> {
  const payload = yield call(getStore)
  yield put({ type: GET_STORE_SUCCESS, payload })
}

function * workGetGmailAndPostReg (): Generator<CallEffect<void> | PutEffect <{ type: string }> | SelectEffect, void, unknown> {
  const payload = yield call(getGmail)
  yield put({ type: GET_GMAIL_SUCCESS, payload })
  const accountInfo = (yield select((state: InitialStateInterface) => state.accountInfo)) as AccountInfoInterface
  const result = yield call(postRegister, accountInfo)
  yield put({ type: POST_REGISTER_SUCCESS, result })
}

function * rootSaga (): any {
  yield takeEvery(GET_STORE_FETCH, workGetStoreFetch)
  yield takeEvery(GET_GMAIL_FETCH, workGetGmailAndPostReg)
}

export default rootSaga
