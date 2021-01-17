import axios from 'axios';
import {resolve} from './Resolve'
import {API_URL} from './BasicUrl'

export async function getOrders() {
    return await resolve(axios.get(
        `${API_URL}/orders`
    )
        .then(res => res.data['hydra:member']))
}
