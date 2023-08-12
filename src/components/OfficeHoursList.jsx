import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const OfficeHoursList = ({officeHoursList, setOfficeHoursList}) => {
  return (
    <Container className="p-2">
      
      <h3 className="display-6 mb-2">OfficeHoursList </h3>
    {officeHoursList.map((item)=>{
const { id, student, consulted, lecturer, day } = item
      return (
        <div>
          <Row>
            <Col>
            <h4>{student}</h4>
            <h5>{lecturer}</h5>
            </Col>
            <h6>{new Date(day).toLocaleDateString()}</h6>
                <h6>{new Date(day).toLocaleTimeString()}</h6>
          </Row>
        </div>
      )
    })}
    </Container>
  );
};

export default OfficeHoursList;
