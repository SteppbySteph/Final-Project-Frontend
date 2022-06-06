import React from "react"

import { ButtonImage, ContactBox, HeaderStyling, LogoLanding, WrapperContact } from 'components/Styles'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Contact = () => {
    return(
        <>
            {/* <HeaderContainer>
                <h1>JS-SUP</h1>
                <Header />
            </HeaderContainer> */}
            <WrapperContact>
                <HeaderStyling>
                    <LogoLanding>JS-SUP</LogoLanding>
                    <Header />
                </HeaderStyling>
                <ContactBox>
                    <h1>About the authors</h1>
                    <ButtonImage src="/assets/Josefin.jpeg" alt="photo of author"/>
                    <div>
                        <p>"I strive to be the very best of myself- and I also lov SUP!"</p>
                        <p>Email: Josefin@email.com</p>
                    </div>
                    <ButtonImage src="/assets/stephannie.jpg" alt="photo of author"/>
                    <div>
                        <p>"My biggest dream is to live again after Technigo bootcamp." </p>
                        <p>LinkedIn: Stephannie@email.com</p>
                    </div>
                </ContactBox>
            </WrapperContact>
            <Footer />
               
        </>
    )
}

export default Contact
