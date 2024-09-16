import React, { useState } from 'react'

const Headers = ({el, setAr, ar, ascendente, setAscendente, elemento, setElemento}) => {
    // if(elemento !== null){
    //     setElemento(null);
    // }
    const handleClick = () => {
        const resultado = [...ar].sort((a, b) => ascendente ? b.age - a.age : a.age - b.age);
        console.log(resultado);
        setAscendente(!ascendente);
        setAr(resultado)
        setElemento(el.field);
        console.log('dentro del handleClick');
        return resultado
}
    console.log(elemento);
    console.log('antes del return de Header');
  return (
    <>
        <h2 style={{display: "flex", flexDirection: "column"}}  onClick={handleClick}>{el.field} {el.field === elemento ? '+' : ''}</h2>
    </>
  )
}

export default Headers