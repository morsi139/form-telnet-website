import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'

function Edit(props) {
  return (
    <div className='edit'>
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row >

                <Col>
                    <label  className="Text-T3">Nom</label>
                </Col>
                <Col>
                    <input  onChange={props.onchange} name="nom"value={props.nom}/>
                </Col>          
            </Row>
            <Row >

                <Col>
                    <label className="Text-T3">Prénom</label>
                </Col>
                <Col>
                    <input  onChange={props.onchange} name="prenom" value={props.prenom} />
                </Col>          
            </Row><Row >

                <Col>
                    <label  className="Text-T3">Adresse</label>
                </Col>
                <Col>
                    <input onChange={props.onchange} name="adresse" value={props.adresse} />
                </Col>          
            </Row>
            <Row >

                <Col>
                    <label  className="Text-T3">Numéro</label>
                </Col>
                <Col>
                    <input  onChange={props.onchange} name="numero" value={props.numero} />
                </Col>          
            </Row>
            
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={props.NohandleCloseEdit}>
            No
          </Button>
          <Button variant="primary" onClick={props.YeshandleCloseEdit}>
           Yes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  )
}

export default Edit