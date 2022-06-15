import React from 'react'
import { useNavigate } from 'react-router-dom'

import { 
    NextButton, 
    StyledContent, 
    StyledGreeting,
    StyledGreetingBox, 
    WrapperLanding
} from 'components/Styles'

const LandingPage = () => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate('/home')
    }

    return (
        <>  
            <WrapperLanding>
                <StyledContent>
                    <StyledGreetingBox>
                    <fieldset>
                    <StyledGreeting>Find your SUP inspiration</StyledGreeting>
                    <legend>
                    <NextButton onClick={handleOnClick}>About Stand Up Paddleboard &#10095;&#10095;</NextButton>
                    </legend>
                    </fieldset>
                    </StyledGreetingBox>
                </StyledContent>
            </WrapperLanding>
            
            
        </>
    )
}

export default LandingPage
