import axios from 'axios';
import {resolve} from './Resolve'
import {API_URL} from './BasicUrl'

export async function getUsers() {
    return await resolve(axios.get(
        `${API_URL}/users`
    )
        .then(res => res.data['hydra:member']))
}
