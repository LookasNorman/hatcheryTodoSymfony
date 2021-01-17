import axios from 'axios';
import {resolve} from './Resolve'
import {API_URL} from './BasicUrl'

export async function getOrders() {
    return await resolve(axios.get(
        `${API_URL}/orders`
    )
        .then(res => res.data['hydra:member']))
}

export async function postNewOrders(data) {
    return await resolve(axios.post(
        `${API_URL}/orders`,
        data,
        {headers: {'Content-Type': 'application/json', 'accept': 'application/ld+json'}}
    )
        .then(res => res.data))
}