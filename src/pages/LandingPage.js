import React from 'react'
import { useNavigate } from 'react-router-dom'

import { 
    NextButton, 
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
                        <StyledGreetingBox>
                            <fieldset>
                                <StyledGreeting>Find your SUP inspiration</StyledGreeting>
                                <legend>
                                    <NextButton onClick={handleOnClick}>About Stand Up Paddleboard &#10095;&#10095;</NextButton>
                                </legend>
                            </fieldset>
                        </StyledGreetingBox>
                    </WrapperLanding>
                </>
    )
}

export default LandingPage
