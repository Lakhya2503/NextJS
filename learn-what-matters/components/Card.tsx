import React from 'react'

type CardPropes = {
    title : string,
    description : string
}

const Card = ({title, description}:CardPropes) => {
  return (
   <div className="flex flex-col">
    <div className="border-2 p-4 bg-amber-300 text-black border-b-blue-600 mx-20">
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
   </div>
    
  )
}

export default Card