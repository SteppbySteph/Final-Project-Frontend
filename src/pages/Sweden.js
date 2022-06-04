
import React, { useState, useEffect } from "react"
import { API_SWEDEN } from "utils/utils"

const Sweden = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(API_SWEDEN)
        .then(res => res.json())
        .then(data =>
            setList(data.data))  
    }, [])

  return (
    <div>
      <h1>Welcome to Sweden. Here we list you all places where you can enjoy or try your SUP skills.</h1>
        
        {list.map((item) => (
        <>
            <p key={item.id}>{item.description}</p>
            {/* <img key={item.image} alt="place">{item.image}</img> */}
        </>
          ))}
        
    </div>
  )
}

export default Sweden
