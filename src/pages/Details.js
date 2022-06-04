import React from "react"

const Details = ({ place }) => {
  return (
    <div>
      {place.map((item) => (
        <div key={item.id}>{item.description}</div>
      ))}
    </div>
  )
}

export default Details
