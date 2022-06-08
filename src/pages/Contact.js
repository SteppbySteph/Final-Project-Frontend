import React from "react"
import { Button } from "@mui/material"

import { 
    ButtonImage,
    ButtonImageContact, 
    ContactBox, 
    FooterStyling, 
    HeaderStyling, 
    LogoLanding, 
    WrapperContact
} from 'components/Styles'

import Footer from 'components/Footer'
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
                    <LogoLanding>JS-SUP</LogoLanding>
                    <Header />
                </HeaderStyling>
                <ContactBox>
                    <h3>About the authors</h3>
                    <div>
                        <ButtonImageContact src="/assets/Josefin.jpeg" alt="photo of author"/>
                        <div>
                            <p>"I strive to be the very best of myself- and I also love SUP!"</p>
                            <Button href="https://www.linkedin.com/in/josefin-eliasson-94a2a8164/">LinkedIn</Button>
                            <Button href="https://github.com/Josse79">Github</Button>
                        </div>
                    </div>
                    <div>
                        <ButtonImage src="/assets/stephannie.jpg" alt="photo of author"/>
                        <div>
                            <p>"My biggest dream is to make it out alive from Technigo bootcamp." </p>
                            <Button href="https://www.linkedin.com/in/stephannie-medenilla/">LinkedIn</Button>
                            <Button href="https://github.com/SteppbySteph">Github</Button>
                        </div>
                    </div>
                </ContactBox>
                <FooterStyling>
                    <Footer />
                </FooterStyling>
            </WrapperContact>
            
               
        </>
    )
}

export default Contact
