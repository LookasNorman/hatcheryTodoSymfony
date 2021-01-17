import axios from 'axios';
import {resolve} from './Resolve'
import { API_URL } from './BasicUrl'

export async function getTodoType() {
  return await resolve(axios.get(
    `${API_URL}/todo_types`
  )
    .then(res => res.data['hydra:member']))
}

export async function postNewTodoType(data) {
  return await resolve(axios.post(
      `${API_URL}/todo_types`,
      data,
      {headers: {'Content-Type': 'application/json', 'accept': 'application/ld+json'}}
  )
      .then(res => res.data))
}