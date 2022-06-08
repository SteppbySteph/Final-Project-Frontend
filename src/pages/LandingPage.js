import React from 'react'
import { useNavigate } from 'react-router-dom'

import { 
    FooterStyling, 
    HeaderStyling, 
    LogoLanding, 
    NextButton, 
    StyledContent, 
    StyledGreeting,
    StyledGreetingBox, 
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
            {/* Tog bort padding-top i WrapperLanding. Header sträcker sig inte längs hela sidan */}
            <WrapperLanding>
                {/* <HeaderStyling> */}
                    {/* <LogoLanding>JS-SUP</LogoLanding> */}
                    {/* <Header /> */}
                {/* </HeaderStyling> */}
                <StyledContent>
                    <StyledGreetingBox>
                    <fieldset>
                    <StyledGreeting>Find your SUP inspiration</StyledGreeting>
                    {/* <StyledGreeting>
                        Finding your SUP inspiration
                       
                    </StyledGreeting> */}
                    <legend>
                    <NextButton onClick={handleOnClick}>About Stand Up Paddleboard &#10095;</NextButton>
                    </legend>
                    </fieldset>
                    </StyledGreetingBox>
                </StyledContent>
                {/* <FooterStyling>
                    <Footer />
                </FooterStyling> */}
            </WrapperLanding>
            
            
        </>
    )
}

export default LandingPage
