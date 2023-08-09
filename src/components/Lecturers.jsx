import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddModal from './AddModal'

const Lecturers = ({lecturers}) => {

const [show, setShow] = useState(false)
const handleShow = () => setShow(true)

const handleClick = () => {
  handleShow();
}

  return (
    <Container className='p-2'>
        
        <h3 className='display-6 mb-3' style={{ color: "rgb(166,18.189" }} >     
        Lecturers 
        
         </h3>
    <Row className='justtify-content-center'> 
{lecturers.map((tr)=> (
    <Col key={tr.id} xs={6} sm={4} md={3}>
    <img 
    src={tr.img} alt={tr.name}
    className="img-thumbnail lecturer-img"
    onClick={()=> handleClick()}
    />
    <h5>{tr.name}</h5>
    <h6>{tr.dep}</h6>
    </Col>
))}
    </Row>
        

        <AddModal show={show}/>
        </Container>
  )
}

export default Lecturers