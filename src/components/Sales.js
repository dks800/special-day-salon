import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Services from "./Services";
import BillSummary from "./BillSummary";

export default function Sales() {
  const [netTotal, setNetTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [userSelection, setUserSelection] = useState([]);

  const updateNetTotal = (value) => {
    if (value === null || value === undefined) return;
    if (value < 1) {
      updateUserSelection([]);
    }
    setNetTotal(value);
    let grandTotal = value - discount;
    setGrandTotal(grandTotal);
  };

  const updateUserSelection = (val) => {
    setUserSelection(val);
  };

  const applyDiscount = (discountAmount) => {
    discountAmount =
      discountAmount === null ||
      discountAmount === undefined ||
      discountAmount === ""
        ? 0
        : discountAmount;
    if (discountAmount > netTotal)
      return alert("Discount can not be greater than net amount");
    let grandTotal = netTotal - discountAmount;
    discountAmount = parseInt(discountAmount);
    setDiscount(discountAmount);
    setGrandTotal(grandTotal);
  };

  return (
    <div className="sales-display">
      <div className="sales-container container">
        <h2 className="text-center">Create Sales</h2>
        <Form>
          <div className="d-flex">
            <Form.Group className="mb-3 w-50 mr-10" controlId="formPhone">
              <h6>Phone Number</h6>
              <Form.Control
                type="phone"
                placeholder="Enter customer phone number"
              />
            </Form.Group>
            <Form.Group className="mb-3 w-50" controlId="formName">
              <h6>Name</h6>
              <Form.Control type="text" placeholder="Enter customer name" />
            </Form.Group>
          </div>
          <Form.Group className="mb-3 text-center" controlId="formService">
            <Services
              setNetTotal={updateNetTotal}
              updateUserSelection={updateUserSelection}
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex order-amount" controlId="formName">
            <Form.Group className="mb-3">
              <h6>Net Total: </h6>
              <Form.Label>Rs. {netTotal}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
              <h6>Disount Amount:</h6>
              <Form.Control
                type="number"
                min="0"
                placeholder="Enter discount amount"
                value={parseInt(discount)}
                onChange={(e) => applyDiscount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <h6>Grand Total:</h6>
              <Form.Label>Rs. {grandTotal}</Form.Label>
            </Form.Group>
          </Form.Group>
          <Button variant="warning">
            <i className="bi bi-plus"></i>Create Sales
          </Button>
        </Form>
      </div>
      {userSelection && userSelection.length > 0 ? (
        <BillSummary
          data={userSelection}
          netTotal={netTotal}
          discount={discount}
          grandTotal={grandTotal}
        />
      ) : (
        ""
      )}
    </div>
  );
}
