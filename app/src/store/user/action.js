import { GET_USER } from '../actionTypes'

export function getUser(id) {
    return {
        type: GET_USER,
        id
    }
}
