import React, { useEffect, useState } from 'react'
// import data from '../data.json'
import BackButton from '../components/Backbutton'
import Footer from '../components/Footer'
import Header from '../components/Header'

import {
  CardContainerDest,
  FooterStyling,
  HeaderContainer,
  Image,
  StyledBackButton
} from '../components/Styles'

const Sweden = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    fetchThoughts();
  }, [])

  const fetchThoughts = () => {
    fetch('https://final-project-sup.onrender.com/sweden')
      .then(res => res.json())
      .then(data => setList(data.response))
  }

  return (
    <div>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <StyledBackButton>
        <BackButton />
      </StyledBackButton>
      {list.map((item) => (
        <CardContainerDest key={item.id}>
          <Image src={item.image} alt='place' />
          <h4>{item.place}</h4>
          <p>{item.description}</p>
        </CardContainerDest>
      ))}

      <FooterStyling>
        <Footer />
      </FooterStyling>
    </div>
  )
}

export default Sweden
