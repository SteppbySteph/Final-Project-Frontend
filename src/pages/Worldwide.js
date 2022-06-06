import React from "react"
import data from '../data.json'

import BackButton from 'components/Backbutton'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { CardContainer, Description, FooterStyling, HeaderContainer, Image, StyledBackButton } from 'components/Styles'

const Worldwide = () => {

  return (
    <div>
      <HeaderContainer>
          JS-SUP
        <Header />
      </HeaderContainer>
      <StyledBackButton>
        <BackButton />
      </StyledBackButton>
      
      {data.worldwide.map((item) => (
        <CardContainer>
          <Image src={item.image} key={item.image} alt="place"/>
          <h4 key={item.id}>{item.place}</h4>
          <Description key={item.id}>{item.description}</Description>
        </CardContainer>
      ))}
      <FooterStyling>
        <Footer/>
      </FooterStyling>
    </div>
  )
}

export default Worldwide
