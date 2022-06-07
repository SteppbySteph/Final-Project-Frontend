import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { API_URL } from 'utils/utils'
import posts from 'reducer/posts'


import PostMenu from 'components/PostMenu'
import Header from 'components/Header'
import BackButton from 'components/Backbutton'
import { StyledBackButton, PostHeader, ElementWrapper } from 'components/Styles'


const YourPosts = () => {
    const accessToken = useSelector((store) => store.user.accessToken)
    const currentUser = useSelector((store) => store.user.username)
    const postItems = useSelector((store) => store.posts.items)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = () => {
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
                dispatch(posts.actions.setItems(data.response));
                dispatch(posts.actions.setError(null));
            } else {
                dispatch(posts.actions.setError(data.response));
                dispatch(posts.actions.setItems([]));
            }
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
            <StyledBackButton>
                <BackButton />
            </StyledBackButton>
        </>


    )
}

export default YourPosts
