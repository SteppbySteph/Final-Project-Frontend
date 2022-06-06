import React from 'react'

import { StyledBackButton, HeaderContainer, StyledSection, ImageContainer, ButtonImage, ButtonImageButton } from 'components/Styles'
import Header from 'components/Header'
import Footer from 'components/Footer'
import BackButton from 'components/Backbutton'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()

    const handleOnClickLogin = () => {
        navigate('/login')
    }
    const handleOnClickSweden = () => {
        navigate('/sweden')
    }
    const handleOnClickEurope = () => {
        navigate('/europe')
    }
    const handleOnClickWorldwide = () => {
        navigate('/worldwide')
    }
    return (
        <>
            <HeaderContainer>
                JS-SUP
                <Header />
            </HeaderContainer>
            <StyledBackButton>
                <BackButton />
            </StyledBackButton>

            <StyledSection>
                <ImageContainer>
                    <ButtonImage src="https://www.towerpaddleboards.com/images/sup-hawaii-paddleboarding.jpg" alt="paddleboards in row"/>
                    <ButtonImageButton onClick={handleOnClickLogin}>Recommendations</ButtonImageButton>
                </ImageContainer>
                <ImageContainer>
                    <ButtonImage src="https://images.unsplash.com/photo-1601283261983-543e77949437?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhbmQlMjB1cCUyMHBhZGRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="paddle in the sunset"/>
                    <ButtonImageButton onClick={handleOnClickSweden}>Sweden top SUP destinations</ButtonImageButton>
                </ImageContainer>
                <ImageContainer>
                    <ButtonImage src="https://images.unsplash.com/photo-1601283261983-543e77949437?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhbmQlMjB1cCUyMHBhZGRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="paddle in the sunset"/>
                    <ButtonImageButton onClick={handleOnClickEurope}>Europe top SUP destinations</ButtonImageButton>
                </ImageContainer>
                <ImageContainer>
                    <ButtonImage src="https://images.unsplash.com/photo-1601283261983-543e77949437?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhbmQlMjB1cCUyMHBhZGRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="paddle in the sunset"/>
                    <ButtonImageButton onClick={handleOnClickWorldwide}>Worldwide top SUP destinations</ButtonImageButton>
                </ImageContainer>
            </StyledSection>
            <Footer />
        </>

    )
}

export default Home
