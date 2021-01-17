import axios from 'axios';
import {resolve} from './Resolve'
import { API_URL } from './BasicUrl'

export async function getMachines() {
  return await resolve(axios.get(
    `${API_URL}/machines`
  )
    .then(res => res.data['hydra:member']))
}

export async function postNewMachines(data) {
  return await resolve(axios.post(
      `${API_URL}/machines`,
      data,
      {headers: {'Content-Type': 'application/json', 'accept': 'application/ld+json'}}
  )
      .then(res => res.data))
}
