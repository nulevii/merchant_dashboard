import { takeEvery, call, put, CallEffect, PutEffect } from 'redux-saga/effects'
import axios from 'axios'

import { API_URL } from '../utilities/constants'
import { GET_STORE_FETCH, GET_STORE_SUCCESS } from './action-types'

export const getStore = async (): Promise<void> => {
  return await axios.get(`${API_URL}/shopify`, { params: { name: 'somethint' } })
    .then(response => response.data)
    .catch(error => { console.log(error) })
}

function * workGetStoreFetch (): Generator<CallEffect<void> | PutEffect<{
  type: string
  payload: any
}>, void, unknown> {
  const payload = yield call(getStore)
  yield put({ type: GET_STORE_SUCCESS, payload })
}

function * mySaga (): any {
  yield takeEvery(GET_STORE_FETCH, workGetStoreFetch)
}

export default mySaga
