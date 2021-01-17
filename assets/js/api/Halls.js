import axios from 'axios';
import {resolve} from './Resolve'
import { API_URL } from './BasicUrl'

export async function getHalls() {
  return await resolve(axios.get(
    `${API_URL}/halls`
  )
    .then(res => res.data['hydra:member']))
}
