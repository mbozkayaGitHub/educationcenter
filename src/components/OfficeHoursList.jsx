import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";

const OfficeHoursList = ({ officeHoursList, setOfficeHoursList }) => {

const handleDelete = (id) => {
  setOfficeHoursList(officeHoursList.filter((item)=> item.id !== id));
}

const handleDoubleClick = (id) => {
  setOfficeHoursList(
    officeHoursList.map((item)=> 
      item.id === id ? {...item,consulted:
        !item.consulted} : item
    )
  )
}
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2">OfficeHoursList </h3>
{officeHoursList.length < 1 && (
  <img src="./img/officeHours.jpg" alt="" width="50%"/>
)}


      {officeHoursList.map((item) => {
        const { id, student, consulted, lecturer, day } = item;
        return (
          <div
            key={id}
            className={
              consulted ? "officeHoursList consulted" : "officeHoursList"
            }
            onDoubleClick={() => handleDoubleClick(id)}
          >
            <Row>
              <Col>
                <h4 className="text-danger">{student}</h4>
                <h5>{lecturer}</h5>
              </Col>
              <Col >
                <h6>{new Date(day).toLocaleDateString()}</h6>
                <h6>{new Date(day).toLocaleTimeString()}</h6>
              </Col>
              <Col
              className="text-end"
              > 
              <FaTimesCircle className="text-danger fs-3" type="button" 
               onClick={() => handleDelete(id)}
              />
              </Col>
            </Row>
          </div>
        );
      })}
    </Container>
  );
};

export default OfficeHoursList;
