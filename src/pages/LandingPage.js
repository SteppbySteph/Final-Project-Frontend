import React from 'react'
import { useNavigate } from 'react-router-dom'

import Header from 'components/Header'
import { WrapperLanding, HeaderContainer, NextButton, StyledGreeting } from 'components/Styles';


const LandingPage = () => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate('/home')
    }

    return (
        <>  
            <HeaderContainer>
                JS-SUP
                <Header />
            </HeaderContainer>
            <WrapperLanding>
                <StyledGreeting>Finding your SUP inspiration</StyledGreeting>
                <NextButton onClick={handleOnClick}>View our homepage</NextButton>
            </WrapperLanding>
        </>
    )
}

export default LandingPage
