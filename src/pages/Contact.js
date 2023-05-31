import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Button } from '@mui/material'

import {
    Author,
    AboutAuthor,
    ImageContact,
    ContactBox,
    FooterStyling,
    HeaderContainer,
    Heading,
    OutterContainer,
} from '../components/Styles'

const Contact = () => {
    return (
        <>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <OutterContainer>
                <Heading>About the authors</Heading>
                <ContactBox>
                    <ImageContact src='/assets/Josefin.jpeg' alt='photo of author' />
                    <AboutAuthor>
                        <Author>Josefin Eliasson</Author>
                        <p>"I strive to be the very best of myself- and I also love SUP!"</p>
                        <div>
                            <Button
                                href='https://www.linkedin.com/in/josefin-eliasson-94a2a8164/'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Go to Linkedin of Josefin Eliasson'
                            >
                                LinkedIn
                            </Button>
                            <Button
                                href='https://github.com/Josse79'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Go to Github of Josefin Eliasson'
                            >
                                Github
                            </Button>
                        </div>
                    </AboutAuthor>
                </ContactBox>
                <ContactBox>
                    <ImageContact src='/assets/stephannie.jpg' alt='photo of author' />
                    <AboutAuthor>
                        <Author>Stephannie Medenilla</Author>
                        <p>"My biggest dream is to make it out alive from Technigo bootcamp."</p>
                        <div>
                            <Button
                                href='https://www.linkedin.com/in/stephannie-medenilla/'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Go to Linkedin of Stephannie Medenilla'
                            >
                                LinkedIn
                            </Button>
                            <Button
                                href='https://github.com/SteppbySteph'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Go to Github of Stephannie Medenilla'
                            >
                                Github
                            </Button>
                        </div>
                    </AboutAuthor>
                </ContactBox>
            </OutterContainer>
            <FooterStyling>
                <Footer />
            </FooterStyling>
        </>
    )
}

export default Contact
