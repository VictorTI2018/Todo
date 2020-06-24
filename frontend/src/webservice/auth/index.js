import http from '../../utils/http'

export const auth = (model) => {
    return http.post(`/auth`, model)
}