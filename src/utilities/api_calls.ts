import axios from 'axios'
import { API_URL } from '../utilities/constants'
import { AccountInfoInterface } from '../store/interfaces'
export const getStore = async (): Promise<void> => {
  return await axios.get(`${API_URL}/shopify`, { params: { name: 'name' } })
    .then(response => response.data)
    .catch(error => { console.log(error) })
}

export const getGmail = async (): Promise<void> => {
  return await axios.get(`${API_URL}/google`, { params: { name: 'name' } })
    .then(response => response.data)
    .catch(error => { console.log(error) })
}

export const postRegister = async (userData: AccountInfoInterface): Promise<void> => {
  return await axios.post(`${API_URL}/register`, userData)
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(error => { console.log(error) })
}
