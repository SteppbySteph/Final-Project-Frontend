import React from 'react'
import { useNavigate } from 'react-router-dom'

import { 
    FooterStyling, 
    HeaderStyling, 
    LogoLanding, 
    NextButton, 
    StyledContent, 
    StyledGreeting, 
    WrapperLanding
} from 'components/Styles'

import Footer from 'components/Footer'
import Header from 'components/Header'

const LandingPage = () => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate('/home')
    }

    return (
        <>  
            {/* <HeaderStyling>
                JS-SUP
                <Header />
            </HeaderStyling> */}

            {/* Tog bort padding-top i WrapperLanding. Header sträcker sig inte längs hela sidan */}
            <WrapperLanding>
                <HeaderStyling>
                    <LogoLanding>JS-SUP</LogoLanding>
                    <Header />
                </HeaderStyling>
                <StyledContent>
                    <StyledGreeting>Finding your SUP inspiration</StyledGreeting>
                    {/* <StyledGreeting>
                        Finding your SUP inspiration
                       
                    </StyledGreeting> */}
                    <NextButton onClick={handleOnClick}>View our homepage</NextButton>
                </StyledContent>
                <FooterStyling>
                    <Footer />
                </FooterStyling>
            </WrapperLanding>
            
            
        </>
    )
}

export default LandingPage
