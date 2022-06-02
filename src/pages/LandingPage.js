import React from 'react'

import Header from 'components/Header'
import { WrapperLanding, HeaderContainer, NextButton, StyledGreeting } from 'components/Styles';


const LandingPage = () => {
    return (
        <>  
            <HeaderContainer>
                JS-SUP
                <Header />
            </HeaderContainer>
            <WrapperLanding>
                <StyledGreeting>Finding your SUP INSPIRATION</StyledGreeting>
                <NextButton>View our homepage</NextButton>
            </WrapperLanding>
        </>
    )
}

export default LandingPage
