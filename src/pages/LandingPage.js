import React from 'react'
import { useNavigate } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer';
import { WrapperLanding, HeaderStyling, NextButton, StyledGreeting } from 'components/Styles';


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
                    JS-SUP
                    <Header />
                </HeaderStyling>
                <StyledGreeting>Finding your SUP inspiration</StyledGreeting>
                <NextButton onClick={handleOnClick}>View our homepage</NextButton>
            </WrapperLanding>
            <Footer />
            
        </>
    )
}

export default LandingPage
