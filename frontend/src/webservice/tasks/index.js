import http from '../../utils/http'

export const tasks = (filter) => {
    return http.get(`/task/${filter}`)
}

export const register = (model) => {
    return http.post('/task/register', model)
}