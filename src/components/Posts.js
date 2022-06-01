import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { API_URL, API_LIKES } from 'utils/utils'
import moment from 'moment'
import { Container, CardContainer, BottomCardContainer, LikeContainer, LikeButton } from 'components/Styles'


import user from 'reducer/user'
import posts from 'reducer/posts'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


const Posts = () => {
    const accessToken = useSelector((store) => store.user.accessToken)
    const postItems = useSelector((store) => store.posts.items)
    const [newPost, setNewPost] = useState ('')
    // const token = localStorage.getItem('token', accessToken)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=> {
        if(!accessToken) {
            navigate('/')
        }
    }, [accessToken, navigate])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = () => {
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
    }
    // }, []);

    const handleNewPost = (event) => {
        setNewPost(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: newPost
            })
          }
  
          fetch(API_URL("posts"), options)
            .then(res =>res.json())
            .then(() => fetchPosts())
            .finally(() => setNewPost(''))
      }

    //Update likes via post id
    const handlePostLikes = (id) => {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
    
        fetch(API_LIKES(id), options)
          .then((res) => res.json())
          .then(() => {
            fetchPosts()
          })
      }   
    


    return (
        <>
            <Container>
                <form onSubmit={handleFormSubmit}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={10}
                        value={newPost}
                        onChange={handleNewPost}
                    />
                    <div>
                        <Button 
                            variant="contained"
                            type='submit'
                            >
                                Submit
                        </Button>
                    </div>
                </form>
            </Container>

            <div>
                {postItems.map((item) => {
                        return <CardContainer key={item._id}>
                                <div>
                                  <p>{item.message}</p>
                                </div>
                                <BottomCardContainer>
                                    <LikeContainer>
                                        <LikeButton
                                            // className={item.likes > 0 ? 'likes-button clicked' : 'likes-button'}
                                            onClick={() => handlePostLikes(item._id)}
                                        >
                                            <span className='like-icon' role='img' aria-label='like emoji'>👍</span>
                                        </LikeButton>
                                        <p>x {item.likes}</p>
                                    </LikeContainer>
                                    <p>{moment.utc(item.createdAt).format('MMM Do YY')}</p>
                                </BottomCardContainer>
                            </CardContainer>
                    })}
            </div>
                    <Button variant="contained" onClick={() => {
                        dispatch(user.actions.setAccessToken(null))
                        // localStorage.removeItem('token')
                    }}
                    >
                        Log out
                    </Button>
        </>
    )
}

export default Posts

