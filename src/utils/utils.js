const BASE_URL = "https://sup-api-js.herokuapp.com"

export const API_URL = (slug) => `${BASE_URL}/${slug}`
export const API_LIKES = (id) => `${BASE_URL}/posts/${id}/likes`
export const API_DELETE = (userId) => `${BASE_URL}/users/${userId}`
export const API_DELETE_MSG = (id) => `${BASE_URL}/posts/${id}`


//Destinations endpoints

// export const API_SWEDEN = () => `${BASE_URL}/destinations/destination/sweden`
export const API_SWEDEN = 'https://sup-api-js.herokuapp.com/destinations/destination/sweden'
