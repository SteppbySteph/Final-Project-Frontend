import React, { useEffect, useState } from 'react'
import fetch from 'node-fetch'
// import data from '../data.json'
import BackButton from '../components/Backbutton'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loading from '../components/Loading'


import {
  CardContainerDest,
  FooterStyling,
  HeaderContainer,
  Image,
  StyledBackButton
} from '../components/Styles'

const Sweden = () => {

  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchThoughts();
  }, [])

  const fetchThoughts = () => {
    setIsLoading(true)
    fetch('https://final-project-sup.onrender.com/sweden')
      .then(res => res.json())
      .then(data => setList(data.response))
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
            <CardContainerDest key={item.id}>
              <Image src={item.image} alt='place' />
              <h4>{item.place}</h4>
              <p>{item.description}</p>
            </CardContainerDest>
          ))}
        </>
      }
      <FooterStyling>
        <Footer />
      </FooterStyling>
    </div>
  )
}

export default Sweden
