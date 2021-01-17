import axios from 'axios';
import {resolve} from './Resolve'
import { API_URL } from './BasicUrl'

export async function getMachines() {
  return await resolve(axios.get(
    `${API_URL}/machines`
  )
    .then(res => res.data['hydra:member']))
}
