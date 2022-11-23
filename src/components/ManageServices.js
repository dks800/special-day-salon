import React, { useState } from "react";
import { service } from "./utils/utility";
import { Tabs, Tab, Modal, Form, Button } from "react-bootstrap";

export default function ManageServices() {
  const [displayModal, setDisplayModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const handleClose = () => setDisplayModal(false);
  const handleOpen = (service, catData) => {
    let data = {
      serviceName: service.name,
      ...catData,
    };
    setModalData(data);
    setDisplayModal(true);
  };
  return (
    <>
      <div className="manage-service-container container">
        <h2 className="text-center">Manage Services</h2>
        <div className="service-list">
          <Tabs defaultActiveKey={service[0].name} className="mb-3">
            {service.map((serv, idx) => {
              return (
                <Tab key={idx} eventKey={serv.name} title={serv.name}>
                  {serv.category.map((cat, index) => {
                    return (
                      <div key={index} className="manage-category-list d-flex">
                        <p className="mr-10">{cat.name}</p>
                        <Button
                          variant="outline-warning"
                          className="btn-sm"
                          onClick={() => handleOpen(serv, cat)}
                        >
                          <i className="bi bi-pencil-square"></i> Edit
                        </Button>
                      </div>
                    );
                  })}
                </Tab>
              );
            })}
            <Tab eventKey="+ Add" title="+ Add"></Tab>
          </Tabs>
        </div>
      </div>
      {displayModal ? (
        <Modal show={displayModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Update Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3 d-flex">
                <Form.Group
                  className="mb-3 mr-10"
                  controlId="exampleForm.ControlInput1"
                >
                  <h6>Service Name</h6>
                  <Form.Control
                    type="text"
                    placeholder="Enter Service Name"
                    value={modalData.serviceName}
                    onChange={() => false}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <h6>Category Name</h6>
                  <Form.Control
                    type="text"
                    placeholder="Enter Caegory Name"
                    value={modalData.name}
                    onChange={() => false}
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <h6>Price List:</h6>
                <Form.Group className="mb-3 d-flex">
                  {modalData.prices.map((price, index) => {
                    return (
                      <Form.Group
                        className="mb-3 mr-10"
                        controlId="exampleForm.ControlInput1"
                        key={index}
                      >
                        <h6>Price Name</h6>
                        <Form.Control
                          type="text"
                          placeholder="Enter Price Name"
                          value={price.name}
                          onChange={() => false}
                        />
                        <h6>Price Rate</h6>
                        <Form.Control
                          type="text"
                          placeholder="Enter Price Rate"
                          value={price.price}
                          onChange={() => false}
                        />
                      </Form.Group>
                    );
                  })}
                </Form.Group>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}
