import React, { useState, useEffect } from 'react';
import DatosCero from './DatosCero';
export default function PeticionUserRandomImaxen() {
    const [booleano,setOutra] = useState(false);
    const [datosRamdomUser,setDatosRamdomUSer] = useState({})

     const funcion = () => {
        const peticion = async () => {
            let datosSolicitados = await fetch('https://randomuser.me/api/?gender=female&results=10&nat=us');
            let datosConvertidosJson = await datosSolicitados.json();
            setDatosRamdomUSer(datosConvertidosJson)
          }
          peticion()
     } 
    useEffect(funcion,[booleano]);

  return (
    <div>
      <button onClick={()=> setOutra(!booleano)}>Actualiza outra</button>
      {datosRamdomUser.results != undefined ? <DatosCero datospedidos={datosRamdomUser.results}/> : <div>cargando datos</div>}
    </div>
  );
}