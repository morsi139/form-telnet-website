import React from 'react'
import Plat from './Plat'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
function Menu() {

  const [userinfo, setUserInfo] = React.useState({
  plat: [],
    response: [],
  });
  
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { plat } = userinfo;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        plat: [...plat, value],
        response: [...plat, value],
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: plat.filter((e) => e !== value),
        response: plat.filter((e) => e !== value),
      });
    }
  };
  function onclick(){
  var idtable = document.getElementById("idtable").value
    axios.post("http://localhost:3333/Client",{list:userinfo.plat.join(),idtable:idtable})
    // console.log(document.getelementbyid("idtable").value) 
   }
  
  return (
    <div className='Menu'>
        <Container>

        <Row className="justify-content-md-center">
        
            <Col xs={2}>
            <p>ID Table</p>
            </Col>
            <Col xs={2}>
            <input id='idtable'></input>
            </Col>
        </Row>
        <Row>
        <div className='container1'>
        <Table responsive>
        <tr>
          
            
            <td><Plat
            className="form-check-input"
            type="checkbox"
            name="azerrty"
            value="baguette farcie"
            id="flexCheckDefault"
            handleChange={handleChange}
            >
              </Plat></td>
                <td><Plat
                className="form-check-input"
                type="checkbox"
                name="azerty"
                value="lasagna"
                id="flexCheckDefault"
                handleChange={handleChange}
                >
                  </Plat></td>
                    <td><Plat
                   className="form-check-input"
                   type="checkbox"
                   name="azertyu"
                   value="citronnade"
                   id="flexCheckDefault"
                   handleChange={handleChange}
                    >
                      </Plat></td>
           
      
           </tr>
           <tr>
          
            
          <td><Plat
          name="azertyu"
          value="jue fraises"
          id="flexCheckDefault"
          handleChange={handleChange}
          >
            </Plat></td>
              <td><Plat
              name="languages"
              value="mlokhiya"
              id="flexCheckDefault"
              handleChange={handleChange}
              >
                </Plat></td>
                  <td><Plat
                  name="azerty"
                  value="glace aux fraises"
                  id="flexCheckDefault"
                  handleChange={handleChange}
                  >
                    </Plat></td>
         
    
         </tr>
         <tr>
          
            
          <td><Plat
          name="languages"
          value=""
          id="flexCheckDefault"
          handleChange={handleChange}
          >
            </Plat></td>
              <td><Plat
             name="languages"
             value="scalope"
             id="flexCheckDefault"
             handleChange={handleChange}
              >
                </Plat></td>
                  <td><Plat
                 name="languages"
                 value="chakchouka"
                 id="flexCheckDefault"
                 handleChange={handleChange}
                  >
                    </Plat></td>
         
    
         </tr>
      </Table>
      <Row>
        <Col md={{ offset: 10}}>
      <Button onClick={onclick} className='submit' variant="primary">Submit</Button>
      </Col>
      </Row>
      </div>
      </Row>
      </Container>
      
    </div>
  )
}

export default Menu