import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { API_URL, API_LIKES } from 'utils/utils'
import moment from 'moment'
import { Container, Form, Textarea, CardContainer, MessageContainer, BottomCardContainer, LikeContainer, LikeButton, PostHeader } from 'components/Styles'
import { Button  } from '@mui/material'

// import user from 'reducer/user'
import posts from 'reducer/posts'

import PostMenu from 'components/PostMenu'
import Header from 'components/Header'
import { ElementWrapper } from 'components/Styles'
import { Identity } from '@mui/base'

const Posts = () => {
    const accessToken = useSelector((store) => store.user.accessToken)
    // const userEmail = useSelector((store) => store.user.email)
    const displayName = useSelector((store) => store.user.username)
    const postItems = useSelector((store) => store.posts.items)
    const newEmail = useSelector((store) => store.posts.email)
    const [newPost, setNewPost] = useState('')
    // const [newEmail, setNewEmail] = useState('')
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
              'Content-Type': 'application/json',
              'Authorization': accessToken,
            },
            body: JSON.stringify({
                message: newPost            
            })
          }
  
          fetch(API_URL("posts"), options)
            .then(res =>res.json())
            .then(() => fetchPosts())
            .finally(() => setNewPost(''))
            // .finally(() => console.log(newPost))
      }
    //   console.log(newPost)

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
              console.log(id)
            fetchPosts()
          })
      }   
    return (
        <>        
            <PostHeader>
                <p>JS-SUP</p>
                <ElementWrapper>
                    <Header />
                    <PostMenu/>
                </ElementWrapper>   
            </PostHeader>
            
            <Container>
                <Form onSubmit={handleFormSubmit}>
                    <Textarea 
                        aria-label='newPost'
                        value={newPost} 
                        onChange={handleNewPost} 
                        placeholder ='Share your SUP recommendation...'
                    />
                    <div>
                        <Button 
                            variant="contained"
                            type='submit'
                            disabled={newPost.length < 5 || newPost.length > 1500}
                            >
                                Submit
                        </Button>
                    </div>
                </Form>
            </Container>
            <div>  
                {postItems.map((item) => {
                    // console.log(item.creator.email)
                    return <CardContainer key={item._id}>
                            <MessageContainer>
                                {item.message}
                            </MessageContainer>
                                <p>{displayName}</p>
                                {/* <p key={item.creator.email}>{item.creator.email}</p> */}
                            <BottomCardContainer>
                                <LikeContainer>
                                    <LikeButton
                                        // className={item.likes > 0 ? 'likes-button clicked' : 'likes-button'}
                                        onClick={() => handlePostLikes(item._id)}
                                    >
                                        <Button variant="text">LIKES</Button>
                                        {/* <span className='like-icon' role='img' aria-label='like emoji'>👍</span> */}
                                    </LikeButton>                                     
                                    <p>x {item.likes}</p>
                                </LikeContainer>
                                <p>{moment.utc(item.createdAt).format('MMM Do YY')}</p>
                            </BottomCardContainer>
                        </CardContainer>     
                    })}
            </div>   
        </>
    )
}

export default Posts

