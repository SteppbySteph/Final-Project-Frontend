import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from 'components/Footer'
import Header from 'components/Header'

import { 
    ButtonImage, 
    ButtonImageButton,
    FooterStyling, 
    HeaderContainer,
    HomeTitle, 
    ImageContainer,
    StyledSection
} from 'components/Styles'

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
                <Header />
            </HeaderContainer>
                    <HomeTitle>
                        Welcome to an inspirational site about Stand Up Paddle Board.
                        View others recommendations or post one yourself.
                        You can also dive into our top destination pages.
                    </HomeTitle>
                <StyledSection>
                    <ImageContainer>
                        <ButtonImage src='assets/paddleboards-in-row.jpeg' alt='paddleboards in row'/>
                        <ButtonImageButton onClick={handleOnClickLogin}>Recommendations</ButtonImageButton>
                    </ImageContainer>
                    <ImageContainer>
                        <ButtonImage src='/assets/paddle-in-sunset.jpg' alt='paddle in the sunset'/>
                        <ButtonImageButton onClick={handleOnClickSweden}>Sweden SUP destinations</ButtonImageButton>
                    </ImageContainer>
                    <ImageContainer>
                        <ButtonImage src='/assets/sup-people.jpg' alt='sup people'/>
                        <ButtonImageButton onClick={handleOnClickEurope}>Europe SUP destinations</ButtonImageButton>
                    </ImageContainer>
                    <ImageContainer>
                        <ButtonImage src='/assets/car-paddleboards.jpg' alt='car with paddelboards'/>
                        <ButtonImageButton onClick={handleOnClickWorldwide}>Worldwide SUP destinations</ButtonImageButton>
                    </ImageContainer>    
                </StyledSection>
            <FooterStyling>
                <Footer />
            </FooterStyling>
        </>
    )
}

export default Home
