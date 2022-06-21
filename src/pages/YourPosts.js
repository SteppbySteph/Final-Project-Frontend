import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EdiText from 'react-editext'
import { Button  } from '@mui/material'

import BackButton from 'components/Backbutton'
import Header from 'components/Header'
import Loading from 'components/Loading'
import PostMenu from 'components/PostMenu'
import posts from 'reducer/posts'
import { API_URL, API_DELETE_MSG, API_UPDATE } from 'utils/utils'

import { 
    BottomCardContainer,
    CardContainer,
    HeaderContainer,
    MessageContainer,
    PostsParagraph,
    StyledBackButton,
    TextContainer,
    YourPostsContainer
} from 'components/Styles'


const YourPosts = () => {
    const accessToken = useSelector((store) => store.user.accessToken)
    const currentUser = useSelector((store) => store.user.userId)
    const postItems = useSelector((store) => store.posts.items)
    const [updatedMessage, setUpdatedMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchPosts()
        //eslint-disable-next-line
    },[])

    const fetchPosts = () => {
        setIsLoading(true)
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            }
        }

        fetch(API_URL("posts"), options)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                dispatch(posts.actions.setItems(data.response))
                dispatch(posts.actions.setError(null))
            } else {
                dispatch(posts.actions.setError(data.response))
                dispatch(posts.actions.setItems([]))
            }
            
        })
        setTimeout(()=> setIsLoading(false), 1000)
    }

    //Deleting a message
    const handleDeleteMsg = (id) => {
        const options = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
    
        fetch(API_DELETE_MSG(id), options)
          .then((res) => res.json())
          .then(() => {
            fetchPosts()
          })
    }
    
    //Updating a message
    const handleUpdateMsg = (id) => {
        const options = {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                updatedMessage: updatedMessage,
            })
        }

        fetch(API_UPDATE(id), options)
            .then((res) => res.json())
            .then(() => fetchPosts())
            .finally(() => setUpdatedMessage(updatedMessage))
    }
    
    return (
        <>        
            <HeaderContainer>
                <Header />
                <PostMenu/>
            </HeaderContainer>
            <StyledBackButton>
                <BackButton />
            </StyledBackButton>
            <YourPostsContainer>
                <TextContainer>
                    <PostsParagraph>
                        See all your posts here and edit them whenever you want.
                    </PostsParagraph>
                </TextContainer>
                {isLoading ? <Loading/> :
                    <>   
                        {postItems.map((item) => {
                            if (currentUser === item.creator.creatorId) {
                                return( 
                                    <CardContainer key={item._id}>
                                        <MessageContainer>
                                            <EdiText 
                                                type='text' 
                                                value={item.message} 
                                                onSave={updatedMessage => setUpdatedMessage(updatedMessage)}
                                            />
                                        </MessageContainer>
                                        <BottomCardContainer>
                                            <Button 
                                                onClick={()=> handleUpdateMsg(item._id)}
                                                variant='text'
                                                size='large'
                                            >
                                                SAVE EDIT
                                            </Button>                          
                                            <Button 
                                                onClick={()=> handleDeleteMsg(item._id)}
                                                variant='text'
                                                size='large'
                                            >
                                                DELETE
                                            </Button>
                                        </BottomCardContainer>
                                    </CardContainer>  )
                            } else { 
                                return null
                            }
                        })}
                    </>
                }
            
            </YourPostsContainer>
        </>
    )
}

export default YourPosts
