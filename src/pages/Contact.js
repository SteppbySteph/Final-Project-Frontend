import React from "react"

import { Button } from "@mui/material"
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
                        <Button href="https://www.linkedin.com/in/josefin-eliasson-94a2a8164/">LinkedIn</Button>
                        <Button href="https://github.com/Josse79">Github</Button>
                    </div>
                    <ButtonImage src="/assets/stephannie.jpg" alt="photo of author"/>
                    <div>
                        <p>"My biggest dream is to live again after Technigo bootcamp." </p>
                        <Button href="https://www.linkedin.com/in/stephannie-medenilla/">LinkedIn</Button>
                        <Button href="https://github.com/SteppbySteph">Github</Button>
                    </div>
                </ContactBox>
            </WrapperContact>
            <Footer />
               
        </>
    )
}

export default Contact
