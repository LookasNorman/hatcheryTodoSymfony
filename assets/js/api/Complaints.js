import axios from 'axios';
import {resolve} from './Resolve'
import { API_URL } from './BasicUrl'

export async function getComplaints() {
  return await resolve(axios.get(
    `${API_URL}/complaints`
  )
    .then(res => res.data['hydra:member']))
}

export async function postNewComplaints(data) {
  return await resolve(axios.post(
      `${API_URL}/complaints`,
      data,
      {headers: {'Content-Type': 'application/json', 'accept': 'application/ld+json'}}
  )
      .then(res => res.data))
}
