import React from "react"
import { Button } from "@mui/material"

import { 
    Author,
    AboutAuthor,
    ImageContact,
    ContactBox, 
    FooterStyling,
    HeaderContainer,
    Heading,
    OutterContainer, 
    WrapperContact,
    
} from 'components/Styles'

import Footer from 'components/Footer'
import Header from 'components/Header'


const Contact = () => {
    return(
        <>   
            <WrapperContact>
                <HeaderContainer>
                    <Header />
                </HeaderContainer>
                <OutterContainer>
                <Heading>About the authors</Heading>
                    <ContactBox>
                        <ImageContact src="/assets/Josefin.jpeg" alt="photo of author"/>
                        <AboutAuthor>
                            <Author>Josefin Eliasson</Author>
                            <p>"I strive to be the very best of myself- and I also love SUP!"</p>   
                        <div>
                            <Button href="https://www.linkedin.com/in/josefin-eliasson-94a2a8164/">LinkedIn</Button>
                            <Button href="https://github.com/Josse79">Github</Button>                    
                        </div>
                        </AboutAuthor>  
                    </ContactBox>
                    <ContactBox>
                        <ImageContact src="/assets/stephannie.jpg" alt="photo of author"/>
                        <AboutAuthor>
                            <Author>Stephannie Medenilla</Author>
                            <p>"My biggest dream is to make it out alive from Technigo bootcamp."</p>
                        <div>
                            <Button href="https://www.linkedin.com/in/stephannie-medenilla/">LinkedIn</Button>
                            <Button href="https://github.com/SteppbySteph">Github</Button>
                        </div>
                        </AboutAuthor>  
                    </ContactBox>    
                </OutterContainer>
                <FooterStyling>
                    <Footer />
                </FooterStyling>     
            </WrapperContact>   
        </>
    )
}

export default Contact
