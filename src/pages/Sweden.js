
import React, { useState, useEffect } from "react"
import { CardContainer, Image, Description } from 'components/Styles'
// import { API_SWEDEN } from "utils/utils"
import data from '../data.json'

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
      {/* <h1>Welcome to Sweden. Here we list you all places where you can enjoy or try your SUP skills.</h1> */}
        
      {data.sweden.map((item) => (
        <CardContainer>
           <Image src={item.image} key={item.image} alt="place"/>
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
