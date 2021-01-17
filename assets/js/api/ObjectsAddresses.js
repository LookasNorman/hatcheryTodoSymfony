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
    { data },
    {headers: HEADERS}
  )
    .then(res => res.data))
}