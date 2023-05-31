import React, { useEffect, useState } from 'react'
// import data from '../data.json'
import BackButton from '../components/Backbutton'
import Footer from '../components/Footer'
import Header from '../components/Header'

import {
  CardContainer,
  FooterStyling,
  HeaderContainer,
  Image,
  StyledBackButton
} from '../components/Styles'

const Worldwide = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    fetchThoughts();
  }, [])

  const fetchThoughts = () => {
    fetch('https://final-project-sup.onrender.com/worldwide')
      .then(res => res.json())
      .then(data => setList(data.data))
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
        <CardContainer key={item.id}>
          <Image src={item.image} key={item.image} alt='place' />
          <h4>{item.place}</h4>
          <p>{item.description}</p>
        </CardContainer>
      ))}

      <FooterStyling>
        <Footer />
      </FooterStyling>
    </div>
  )
}

export default Worldwide
