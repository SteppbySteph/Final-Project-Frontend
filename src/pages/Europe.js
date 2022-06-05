import React from "react"
import data from '../data.json'
import Header from 'components/Header'
import BackButton from 'components/Backbutton'
import { HeaderContainer, StyledBackButton, CardContainer, Image, Description } from 'components/Styles'

const Europe = () => {

  return (
    <div>
        <HeaderContainer>
            JS-SUP
            <Header />
        </HeaderContainer>
        <StyledBackButton>
            <BackButton />
        </StyledBackButton>
        
      {data.europe.map((item) => (
        <CardContainer>
           <Image src={item.image} key={item.image} alt="place"/>
           <h4 key={item.id}>{item.place}</h4>
           <Description key={item.id}>{item.description}</Description>
        </CardContainer>
      ))}
    </div>
  )
}

export default Europe
