import { takeEvery } from 'redux-saga/effects'
import { API_URL } from '../utilities/constants'
import axios from 'axios'

export const getStore = async (): Promise<void> => {
  return await axios.get(`${API_URL}/shopify`, { params: { name: 'somethint' } })
    .then(response => { console.log(response) })
    .catch(error => { console.log(error) })
}
// function * mySaga (): any {
//   yield takeEvery(GET_USERS_FETCH, workGetUsersFetch)
// }

// export default mySaga
