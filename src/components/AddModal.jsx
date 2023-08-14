import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import OfficeHoursList from "./OfficeHoursList";

const AddModal = ({show,handleClose,selectedTrName,setOfficeHoursList,officeHoursList}) => {


    const [studentName, setStudentName] = useState("")

    const [date, setDate] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()
    setOfficeHoursList([
      ...officeHoursList, {
        id:officeHoursList.length + 1,
        student:studentName,
        day:date,
        cosulted:false,
        lecturer:selectedTrName,
      }
    ])
handleClose()
}
console.log(selectedTrName);
console.log(studentName,date);
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
                <Form.Control type="text" placeholder=" Enter your name"
                onChange={(e)=>setStudentName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="datetime">
                <Form.Label>Day&Time</Form.Label>
                <Form.Control type="datetime-local" 
                  onChange={(e) =>setDate(e.target.value)}/>
              </Form.Group>
              <div className="text-center">
                <Button variant="success" type="submit" className="me-2">
                  Submit
                </Button>
                <Button variant="danger" onClick={handleClose}>Close</Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </>
  );
};

export default AddModal;
