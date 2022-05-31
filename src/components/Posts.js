import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { API_URL } from 'utils/utils'

import user from 'reducer/user'
import posts from 'reducer/posts'

import Button from "@mui/material/Button";


const Posts = () => {
    const accessToken = useSelector((store) => store.user.accessToken)
    const postItems = useSelector((store) => store.posts.items)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=> {
        if(!accessToken) {
            navigate('/')
        }
    }, [accessToken])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken,
            }
        }

        fetch(API_URL("posts"), options)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                dispatch(posts.actions.setItems(data.response));
                dispatch(posts.actions.setError(null));
            } else {
                dispatch(posts.actions.setError(data.response));
                dispatch(posts.actions.setItems([]));
            }
        })
    }, []);

    return (
        <div>
            {postItems.map((item) => {
                    return <div key={item._id}>
                        {item.message}
                        </div>
                })}
                <Button variant="contained" onClick={() => {
                    dispatch(user.actions.setAccessToken(null))
                }}
                >
                    Log out
                </Button>
        </div>
    )
}

export default Posts

