
import React, { useState, useEffect } from "react"
import data from '../data.json'
import Header from 'components/Header'
import BackButton from 'components/Backbutton'
import { HeaderContainer, StyledBackButton, CardContainer, Image, Description } from 'components/Styles'
// import { API_SWEDEN } from "utils/utils"

const Sweden = () => {
    // const [list, setList] = useState([]);

    // useEffect(() => {
    //     fetch(API_SWEDEN)
    //     .then(res => res.json())
    //     .then(data =>
    //         setList(data.data))  
    // }, [])

  return (
    <div>
        <HeaderContainer>
            JS-SUP
            <Header />
        </HeaderContainer>
        <StyledBackButton>
            <BackButton />
        </StyledBackButton>
      {/* <h1>Welcome to Sweden. Here we list you all places where you can enjoy or try your SUP skills.</h1> */}
        
      {data.sweden.map((item) => (
        <CardContainer>
           <Image src={item.image} key={item.image} alt="place"/>
           <h4 key={item.id}>{item.place}</h4>
           <Description key={item.id}>{item.description}</Description>
        </CardContainer>
      ))}
        {/* {list.map((item) => (
        <>
            <p key={item.id}>{item.description}</p>
            <img src={item.image} key={item.image} alt="place"/>
        </>
          ))} */}
    </div>
  )
}

export default Sweden
