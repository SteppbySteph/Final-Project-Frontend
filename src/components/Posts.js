import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { API_URL } from 'utils/utils'
import { FormContainer } from 'components/Styles'


import user from 'reducer/user'
import posts from 'reducer/posts'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


const Posts = () => {
    const accessToken = useSelector((store) => store.user.accessToken)
    const postItems = useSelector((store) => store.posts.items)
    // const token = localStorage.getItem('token', accessToken)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=> {
        if(!accessToken) {
            navigate('/')
        }
    }, [accessToken, navigate])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
                // 'Token': token
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
            <FormContainer>
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={10}
                    defaultValue="Add your inspiring SUP experience"
                />
            </FormContainer>
            <FormContainer>
                {postItems.map((item) => {
                        return <div key={item._id}>
                            {item.message}
                            </div>
                    })}
            </FormContainer>
                    <Button variant="contained" onClick={() => {
                        dispatch(user.actions.setAccessToken(null))
                        // localStorage.removeItem('token')
                    }}
                    >
                        Log out
                    </Button>
        </div>
    )
}

export default Posts

