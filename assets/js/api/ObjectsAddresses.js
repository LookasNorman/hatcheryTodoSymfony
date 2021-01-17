import axios from 'axios';
import {resolve} from './Resolve'
import { API_URL, HEADERS } from './BasicUrl'

export async function getObjectsAddresses() {
  return await resolve(axios.get(
    `${API_URL}/object_addresses`
  )
    .then(res => res.data['hydra:member']))
}

export async function newObjectAddress(data) {
  return await resolve(axios.post(
      `${API_URL}/object_addresses`,
      data,
      {headers: {'Content-Type': 'application/json', 'accept': 'application/ld+json'}}
  )
      .then(res => res.data))
}