const BASE_URL = "https://sup-api-js.herokuapp.com"

export const API_URL = (slug) => `${BASE_URL}/${slug}`
export const API_LIKES = (id) => `${BASE_URL}/posts/${id}/likes`

