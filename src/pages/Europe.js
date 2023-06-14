import React, { useEffect, useState } from 'react'
import fetch from 'node-fetch'

// import data from '../data.json'
import BackButton from '../components/Backbutton'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loading from '../components/Loading'

import {
  CardContainer,
  FooterStyling,
  HeaderContainer,
  Image,
  StyledBackButton
} from '../components/Styles'

const Europe = () => {

  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchThoughts();
  }, [])

  const fetchThoughts = () => {
    setIsLoading(true)
    fetch('https://final-project-sup.onrender.com/europe')
      .then(res => res.json())
      .then(data => setList(data.data))
      .finally(() => setIsLoading(false))
  }

  return (
    <div>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <StyledBackButton>
        <BackButton />
      </StyledBackButton>
      {isLoading ? <Loading /> :
        <>
          {list.map((item) => (
            <CardContainer key={item.id}>
              <Image src={item.image} key={item.image} alt='place' />
              <h4>{item.place}</h4>
              <p>{item.description}</p>
            </CardContainer>
          ))}
        </>
      }
      <FooterStyling>
        <Footer />
      </FooterStyling>
    </div>
  )
}

export default Europe
