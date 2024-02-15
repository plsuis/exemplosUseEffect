import React, { useState, useEffect } from 'react';
export default function UseEffect_1() {
    const [count, setCount] = useState(0);
    const [booleano,setOutra] = useState(false)

     const funcion = () => {
        document.title = `Clicaches ${count} veces`;
        console.log('estou en useEffect')

        //return (()=>console.log('chao'))
      } 
    
    useEffect(funcion,[]);

  return (
    <div>
      <p>Clicaches ${count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Clica
      </button>
      <h3>Observa cómo se actualiza useEffect sen un control cada vez que clico o botón seguinte</h3>
      <button onClick={()=> setOutra(!booleano)}>Actualiza outra</button>
    </div>
  );
}