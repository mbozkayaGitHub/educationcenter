import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Lecturers = ({lecturers}) => {
  return (
    <Container className='p-2'>
        
        <h3 className='display-6 mb-3' >     
        Lecturers 
        
         </h3>
    <Row className='justtify-content-center'> 
{lecturers.map((tr)=> (
    <Col key={tr.id} xs={6} sm={4} md={3}>
    <img 
    src={tr.img} alt={tr.name}
    className="lecturer-img"
    />
    <h5>{tr.name}</h5>
    <h6>{tr.dep}</h6>
    </Col>
))}
    </Row>
        
        
        
        </Container>
  )
}

export default Lecturers