import React from 'react'

const Product = ({el}) => {

  return (
    <>
        <div style={{display:"flex"}}>
            <p>{el.name}</p> <p>{el.age}</p>
        </div>
    </>
  )
}

export default Product