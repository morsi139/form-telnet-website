import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import IcoMoon from 'react-icomoon';
import Button from 'react-bootstrap/Button'
import Action from './Action';
import Edit from './Edit';
import Remove from './Remove';
import axios from 'axios';
import { wait } from '@testing-library/user-event/dist/utils';


function Admin() {

   var data= null
    const [row, setRow] = useState(null);
    const [selectedData, setSelectedData] = useState({});
    const [nom,setNom]=useState('')
    const [prenom,setPrenom]=useState('')
    const [adresse,setAdresse]=useState('')
    const [numero,setNumero]=useState('')
    const [currentPage, setCurrentPage] = useState(0)
    const PER_PAGE = 100
    const offset = currentPage * PER_PAGE
    const [theArray,setTheArray] = useState([])
    const [showEdit, setShowEdit] = useState(false);
    const NohandleCloseEdit= ()=>{ setShowEdit(false) }
    const YeshandleCloseEdit = () => {
    setShowEdit(false) 
    axios.patch(`http://localhost:3333/User/${selectedData.id}`,selectedData)
    theArray[row]=selectedData
};
    const handleShowEdit = () => setShowEdit(true);

    const [showRemove, setShowRemove] = useState(false);
    const handleCloseRemove = () => setShowRemove(false);
    const handleShowRemove = () => setShowRemove(true);
    const [removeState, setremoveState] = useState(false);
    const [RowIndex, setRowIndex] = useState();
    // useEffect(()=>{setTheArray(data)},[])
    useEffect( () => {
        axios.get("http://localhost:3333/User")
       .then((response) => {
         data=response.data
         
         setTheArray(data)
       });

      },[]);
    function delite(){
        setremoveState(true)
        handleCloseRemove();
    }
    useEffect(()=>{
        const aux = theArray
        if ( removeState) {
            let list1 = aux.filter((element, index) =>
                index !== RowIndex
            )
            setTheArray(list1)
            setremoveState(false)
            }


    })
    async function remove(rowIndex) {
        handleShowRemove()  
        setRowIndex(rowIndex)
        const aux = theArray
        let i=theArray[rowIndex].id
        axios.delete("http://localhost:3333/User/"+i)
        }
    function edit(rowIndex) {
        const aux = theArray
        let list = aux.filter((element, index) =>
            index == rowIndex
        )
        handleShowEdit()
        setSelectedData(list[0]) 
        setRow(rowIndex)
            
    }
            const onchange=(e)=>{
                setSelectedData({...selectedData,[e.target.name]:e.target.value})

            }
  return (
    <div className='page'>
        <div className='table'>
            <Remove      
                show={showRemove}
                handleClose={handleCloseRemove}
                delit={delite}
                 handleShow={handleShowRemove} 
            ></Remove>
            <Edit
                YeshandleCloseEdit={YeshandleCloseEdit}
                NohandleCloseEdit={NohandleCloseEdit}
                onchange={onchange}
                nom={selectedData.nom}
                prenom={selectedData.prenom}
                adresse={selectedData.adresse}
                numero={selectedData.numero}
                show={showEdit}
                
             ></Edit>
        <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>ID</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Adresse</th>
          <th>Numéro</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
      {


Object.keys(theArray).length === 0 ? (
    <div>...Loading</div>
) : (
    theArray && theArray.slice(offset, offset + PER_PAGE).map((itemques, index) => {
        return (<tr key={index + offset}>
            
            <td>{itemques.id}</td>
            <td>{itemques.nom}</td>
            <td>{itemques.prenom}</td>
            <td>{itemques.adresse}</td>
            <td>{itemques.numero}</td>
            
            <td><Action edit={()=> edit(index)} remove={()=>remove(index)}></Action></td>
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