import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddModal = ({show,handleClose,selectedTrName}) => {

const handleSubmit = (e) => {
    e.preventDefault()

}


  return (
    <>
      <>
        <Modal  show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title className="text-danger">
              Reservation for {selectedTrName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}> 
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Student Name</Form.Label>
                <Form.Control type="text" placeholder=" Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="datetime">
                <Form.Label>Day&Time</Form.Label>
                <Form.Control type="datetime-local" />
              </Form.Group>
              <div className="text-center">
                <Button variant="success" type="submit" className="me-2">
                  Submit
                </Button>
                <Button variant="danger">Close</Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </>
  );
};

export default AddModal;
