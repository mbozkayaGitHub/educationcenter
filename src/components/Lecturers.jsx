import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddModal from "./AddModal";

const Lecturers = ({ lecturers, officeHoursList, setOfficeHoursList }) => {
  const [show, setShow] = useState(false);

  const [selectedTrName, setSelectedTrName] = useState("");

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (trName) => {
    handleShow();
    setSelectedTrName(trName);
  };

  console.log(selectedTrName);

  return (
    <Container className="p-2">
      
      <Row className="justtify-content-center">
        {lecturers.map((tr) => (
          <Col key={tr.id} xs={6} sm={4} md={3}>
            <img
              src={tr.img}
              alt={tr.name}
              className="img-thumbnail lecturer-img"
              onClick={() => handleClick(tr.name)}
            />
            <h5>{tr.name}</h5>
            <h6>{tr.dep}</h6>
          </Col>
        ))}
      </Row>

      <AddModal
        show={show}
        handleClose={handleClose}
        selectedTrName={selectedTrName}
        officeHoursList={officeHoursList}
        setOfficeHoursList={setOfficeHoursList}
      />
    </Container>
  );
};

export default Lecturers;
