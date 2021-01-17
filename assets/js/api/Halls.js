import axios from 'axios';
import {resolve} from './Resolve'
import { API_URL } from './BasicUrl'

export async function getHalls() {
  return await resolve(axios.get(
    `${API_URL}/halls`
  )
    .then(res => res.data['hydra:member']))
}

export async function postNewHall(data) {
  return await resolve(axios.post(
      `${API_URL}/halls`,
      data,
      {headers: {'Content-Type': 'application/json', 'accept': 'application/ld+json'}}
  )
      .then(res => res.data))
}