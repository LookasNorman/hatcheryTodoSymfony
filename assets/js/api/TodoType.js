import axios from 'axios';
import {resolve} from './Resolve'
import { API_URL } from './BasicUrl'

export async function getTodoType() {
  return await resolve(axios.get(
    `${API_URL}/todo_types`
  )
    .then(res => res.data['hydra:member']))
}
