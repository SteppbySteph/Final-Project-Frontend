import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button  } from '@mui/material'
import moment from 'moment'

import { 
    BottomCardContainer,
    CardContainer,
    Container,
    Form,
    FormButtons,
    HeaderContainer,
    // LikeButton,
    LikeContainer,
    MessageContainer,
    PostParagraphContainer,
    PostsParagraph,
    StyledParagraph, 
    Textarea, 
    YourPostButton
} from 'components/Styles'

import { API_URL, API_LIKES } from 'utils/utils'
import posts from 'reducer/posts'
import PostMenu from 'components/PostMenu'
import Header from 'components/Header'
import Loading from 'components/Loading'
// import { Identity } from '@mui/base'

const Posts = () => {
    const accessToken = useSelector((store) => store.user.accessToken)
    const postItems = useSelector((store) => store.posts.items)
    const [newPost, setNewPost] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(()=> {
        if(!accessToken) {
            navigate('/')
        }
    }, [accessToken, navigate])

    useEffect(() => {
        fetchPosts()
        //eslint-disable-next-line
    }, [])

    const fetchPosts = () => {
        setIsLoading(true)
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
        setTimeout(()=> setIsLoading(false), 1000)
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
                message: newPost,
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
              console.log(id)
            fetchPosts()
          })
      } 

    const handleYourPosts = () => {
        navigate('/yourposts')
    }
    
    return (
        <>        
            <HeaderContainer>
                <Header />
                <PostMenu/>
            </HeaderContainer>   
            {isLoading ? <Loading/> : 
                <>
                    <PostParagraphContainer>
                        <PostsParagraph>
                            Share an inspirational SUP-experience or leave one below!
                        </PostsParagraph>
                    </PostParagraphContainer>
                    <Container>
                        <Form onSubmit={handleFormSubmit}>
                            <Textarea 
                                aria-label='newPost'
                                value={newPost} 
                                onChange={handleNewPost} 
                                placeholder ='Share your SUP recommendation...'
                            />
                            <FormButtons>
                                <Button 
                                    variant="contained"
                                    type='submit'
                                    disabled={newPost.length < 5 || newPost.length > 1500}
                                >
                                    SUBMIT POST
                                </Button>
                                <YourPostButton>  
                                    <Button 
                                        variant="text"
                                        type='submit'
                                        onClick={handleYourPosts} 
                                    >
                                        YOUR POSTS
                                    </Button>
                                </YourPostButton>
                            </FormButtons>
                        </Form> 
                    </Container>
                    <div>
                        {postItems.map((item) => {
                            return <CardContainer key={item._id}>
                                    <MessageContainer>
                                        <p>{item.message}</p>
                                    </MessageContainer>
                                        <StyledParagraph>{item.creator.name}</StyledParagraph>
                                        <StyledParagraph>{item.creator.email}</StyledParagraph>
                                    <BottomCardContainer>
                                        <LikeContainer>
                                            {/* <LikeButton
                                                // className={item.likes > 0 ? 'likes-button clicked' : 'likes-button'}
                                                onClick={() => handlePostLikes(item._id)}
                                            > */}
                                                <Button 
                                                    variant="text"
                                                    size='medium'
                                                    onClick={() => handlePostLikes(item._id)}
                                                >LIKES
                                                </Button>
                                            {/* </LikeButton>  */}
                                            <StyledParagraph>x {item.likes}</StyledParagraph>                                    
                                        </LikeContainer>
                                        <StyledParagraph>{moment.utc(item.createdAt).format('MMM Do YY')}</StyledParagraph>
                                    </BottomCardContainer>
                                </CardContainer>     
                            })}     
                    </div>
                </>
            }    
        </>
    )
}

export default Posts

