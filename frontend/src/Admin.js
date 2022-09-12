import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
function Admin() {

   var data=null
  

    const [currentPage, setCurrentPage] = useState(0)
    const PER_PAGE = 10
    const offset = currentPage * PER_PAGE
    const [theArray,setTheArray] = useState([])
    const [valider,setValider] = useState(false)
    const [variant,setVariant] = useState("primary")
    // useEffect(()=>{setTheArray( data)},[])

    function valide(){
        setValider(false)
        setVariant("secondary")

    }
    useEffect( () => {
        axios.get("http://localhost:3333/Client")
       .then((response) => {
        console.log(response.data)
         data=response.data
         
         setTheArray(data)
       });
    
      },[]);
  return (
    <div className='admin'>
   <div className='table'>


   <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>ID</th>
          <th>List</th>
          <th className='Action'>Action</th>
        </tr>
      </thead>
      <tbody>
      {


Object.keys(theArray).length === 0 ? (
    <div>...Loading</div>
) : (
    theArray && theArray.slice(offset, offset + PER_PAGE).map((itemques, index) => {
        return (<tr key={index + offset}>
            
            <td>{itemques.idtable}</td>
            <td>{itemques.list}</td>
            <td className='Action'> <Button onClick={valide} variant={variant}>Valider</Button>{' '}</td>
        </tr>
        )

    }))

}
        
      </tbody>
    </Table>
   </div>




    </div>
  )
}

export default Admin