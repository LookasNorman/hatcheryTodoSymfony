import axios from 'axios';
import {resolve} from './Resolve'
import { API_URL } from './BasicUrl'

export async function getMachinesGroups() {
  return await resolve(axios.get(
    `${API_URL}/machines_groups`
  )
    .then(res => res.data['hydra:member']))
}

export async function postNewMachinesGroups(data) {
  return await resolve(axios.post(
      `${API_URL}/machines_groups`,
      data,
      {headers: {'Content-Type': 'application/json', 'accept': 'application/ld+json'}}
  )
      .then(res => res.data))
}