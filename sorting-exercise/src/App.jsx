import { useState } from 'react'

import './App.css'
import Product from './components/Product'
import Headers from './components/Headers'


function App() {
  const arreglo =  [
      {  id: 1,  name: "John Doe",  age: 45},{  id: 2,  name: "Dana Merry",  age: 25},{  id: 3,  name: "April Fools",  age: 18}, {id:4, name: "Eduardo", age: 28}, {id: 5, name: "Estrella", age : 22}    ]
  const headers = [{field: "Nombre"}, {field: "Edad"}]
  const [ar, setAr] = useState(arreglo)


  const [ascendente, setAscendente] = useState(false);
  const [elemento, setElemento] = useState(null);
  console.log(elemento);

  return (
    <>
      <h1>Sorting Exercise</h1>
      <section style={{display: "flex", flexDirection: "row"}}>
        {headers.map((el, index) => (
          <Headers el={el} key={index} ar={ar} setAr={setAr} ascendente={ascendente} setAscendente={setAscendente} elemento={elemento} setElemento={setElemento} />
        ))}
      </section>
      <section style={{display: "flex", flexDirection: "column"}}>
        {ar.map((el, index) => (
          <Product key={index} el={el} />
        ))}
      </section>



    </>
  )
}

export default App
