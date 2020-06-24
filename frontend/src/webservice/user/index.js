import http from '../../utils/http'

export const find = (id) => {
    return http.get(`/user/${id}`)
}

export const register = (model) => {
    return http.post(`/user/register`, model)
}