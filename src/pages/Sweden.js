import React from 'react'
import data from '../data.json'
import BackButton from 'components/Backbutton'
import Footer from 'components/Footer'
import Header from 'components/Header'

import { 
  CardContainerDest,
  FooterStyling,
  HeaderContainer, 
  Image, 
  StyledBackButton 
} from 'components/Styles'

const Sweden = () => {
   
  return (
    <div>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <StyledBackButton>
            <BackButton />
        </StyledBackButton>
        
        {data.sweden.map((item) => (
          <CardContainerDest>
            <Image src={item.image} key={item.image} alt='place'/>
            <h4 key={item.id}>{item.place}</h4>
            <p key={item.id}>{item.description}</p>
          </CardContainerDest>
        ))}

        <FooterStyling>
          <Footer/>
        </FooterStyling>
    </div>
  )
}

export default Sweden
