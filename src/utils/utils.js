
const BASE_URL = 'http://localhost:8080'
// https://final-project-sup.onrender.com
// https://sup-api-js.herokuapp.com

export const API_URL = (slug) => `${BASE_URL}/${slug}`
export const API_LIKES = (id) => `${BASE_URL}/posts/${id}/likes`
export const API_DELETE = (userId) => `${BASE_URL}/users/${userId}`
export const API_DELETE_MSG = (id) => `${BASE_URL}/posts/${id}`
export const API_UPDATE = (id) => `${BASE_URL}/posts/${id}`
