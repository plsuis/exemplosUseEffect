import React, { useState, useEffect } from 'react';
export default function PeticionUserRandom() {
    const [booleano,setOutra] = useState(false)

     const funcion = () => {
        const peticion = async () => {
            let datosSolicitados = await fetch('https://randomuser.me/api/?gender=female&results=10&nat=us');
            let datosConvertidosJson = await datosSolicitados.json();
            console.log('datosConvertidos: ',datosConvertidosJson)
          }
          peticion()
     } 
      
    
    useEffect(funcion,[booleano]);

  return (
    <div>
      <button onClick={()=> setOutra(!booleano)}>Actualiza outra</button>
    </div>
  );
}