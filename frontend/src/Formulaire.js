import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
export default function Formulaire() {
   // const [data,setData]=useState(null)
   // var data2= null
   // useEffect( () => {
   //      axios.get("http://localhost:3333/User")
   //     .then((response) => {
   //       // console.log(response.data)
   //       setData (response.data);
   //       data2=response.data
   //       console.log(data2)
   //     });
       
   //    //  .then(Response =>  setData(Response.data))
       
   //    //  .then (Res => {console.log("aaa")
   //    //         console.log(datax)})
       
   //   },[]);
   function submit(){
     var data = {nom:document.getElementById("nom").value,
     prenom:document.getElementById("prenom").value,
     adresse:document.getElementById("adresse").value,
     numero:parseInt(document.getElementById("numero").value)}

     axios.post("http://localhost:3333/User",data).then(Response=>console.log(Response))
   }
  return (
    <div className='page'>
    <div className='formulaire'>
       
     <div className='row'>
        <label>Nom</label> 
        <input id='nom' placeholder='Entrer votre nom'></input>
     </div>
     <div className='row'>
        <label>Prénom</label> 
        <input id='prenom' placeholder='Entrer votre Prénom'></input>
     </div>
     <div className='row'>
        <label>Adresse</label> 
        <input id='adresse' placeholder='Entrer votre adresse'></input>
     </div>
     <div className='row'>
        <label>Numéro</label> 
        <input type="number" id='numero' placeholder='Entrer votre numéro'></input>
     </div>

     <div className='row'>
     <Button onClick={submit} variant="success">Submit</Button>
     </div>
    </div>
    </div>
  )
}
