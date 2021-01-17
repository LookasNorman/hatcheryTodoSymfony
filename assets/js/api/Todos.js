import axios from 'axios';
import {resolve} from './Resolve'
import {API_URL} from './BasicUrl'

export async function getTodayTodos(date) {
    return await resolve(axios.get(
        `${API_URL}/todos?date=${date}&exists[endDate]=false`
    )
        .then(res => res.data['hydra:member']))
}

export async function getObjectTodos(objectAddress) {
    return await resolve(axios.get(
        `${API_URL}/todos?exist[endDate]=false&objectAddress=${objectAddress}`
    )
        .then(res => res.data['hydra:member']))
}

export async function getTodosByObjectAndType() {
    return await resolve(axios.get(
        `${API_URL}/todos/object/details`
    )
        .then(res => res.data))
}

export async function getOverdueTodos(date) {
    return await resolve(axios.get(
        `${API_URL}/todos?date[strictly_before]=${date}&exists[endDate]=false`
    )
        .then(res => res.data['hydra:member']))
}

export async function getNextWeekTodos(date) {
    return await resolve(axios.get(
        `${API_URL}/todos?date[strictly_after]=${date}&exists[endDate]=false`
    )
        .then(res => res.data['hydra:member']))
}

export async function getTodayTodosTypesObjects(date) {
    return await resolve(axios.get(
        `${API_URL}/todos/today/details/${date}`,
        {
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.data))
}

export async function getOverdueTodosTypesObjects(date) {
    return await resolve(axios.get(
        `${API_URL}/todos/overdue/details/${date}`,
        {
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.data))
}

export async function getNextTodosTypesObjects(date) {
    return await resolve(axios.get(
        `${API_URL}/todos/next/details/${date}`,
        {
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.data))
}

export async function postNewTodo(data) {
    return await resolve(axios.post(
        `${API_URL}/todos`,
        data,
        {headers: {'Content-Type': 'application/json', 'accept': 'application/ld+json'}}
    )
        .then(res => res.data))
}