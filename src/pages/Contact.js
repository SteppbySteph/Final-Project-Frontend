import React from "react"

import { ButtonImage, ContactBox, HeaderStyling, WrapperContact } from 'components/Styles'
import Header from 'components/Header'

const Contact = () => {
    return(
        <>
            {/* <HeaderContainer>
                <h1>JS-SUP</h1>
                <Header />
            </HeaderContainer> */}
            <WrapperContact>
                <HeaderStyling>
                    <h4>JS-SUP</h4>
                    <Header />
                </HeaderStyling>
                <ContactBox>
                    <ButtonImage src="/assets/stephannie.jpg" alt="photo of author"/>
                    <ButtonImage src="/assets/Josefin.jpeg" alt="photo of author"/>
                </ContactBox>
            </WrapperContact>   
        </>
    )
}

export default Contact
