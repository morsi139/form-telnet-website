import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import food1 from './image/food1.jpg'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
function Plat(props) {
  return (
    <div className='plat'>
      <Card style={{ width: '10rem' }}>
        <div className='row1'>
        <div className='image'>
          
      <Card.Img variant="top" src={food1} />
      </div>
      <div className='titre'>
       
      <Card.Title >{props.value}</Card.Title>
      </div>
      </div>
        <Card.Body>
        
        
        <Card.Text>
          {props.name}
        </Card.Text >
      
        <Form.Check id="check"
         className='check'
         name={props.name}
         value={props.value}
        //  checked={props.isChecked}
         onChange={props.handleChange} />
      </Card.Body>
    </Card>




    </div>
  )
}

export default Plat