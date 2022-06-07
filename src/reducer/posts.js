import { createSlice } from "@reduxjs/toolkit"

const posts = createSlice({
    name: 'posts',
    initialState : {
        items: [],
        email: null,
        error: null
    },
    reducers: {
        setItems: (store, action) => {
            store.items = action.payload
        },
        setEmail: (store,action) => {
            store.email = action.payload
        },
        setError: (store,action) => {
            store.error = action.payload
        }
    }
})


export default posts