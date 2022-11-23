import React from "react";
import { Alert, Card, Accordion, Button } from "react-bootstrap";
import { service } from "./utils/utility";

export default function BillSummary(props) {
  let userData = props.data;
  let categoryTotal = {};
  let myData = {};
  for (let i = 0; i < userData.length; i++) {
    if (myData[userData[i].serviceCode]) {
      myData[userData[i].serviceCode].push(userData[i]);
      categoryTotal[userData[i].serviceCode] += userData[i].price;
    } else {
      myData[userData[i].serviceCode] = [];
      myData[userData[i].serviceCode].push(userData[i]);
      categoryTotal[userData[i].serviceCode] = userData[i].price;
    }
  }

  const getServiceName = (serivceCode) => {
    let result = service.filter((data) => data.code === serivceCode);
    return (result && result.length > 0 && result[0].name) || "";
  };

  return (
    <>
      <Card className="total-summary">
        <Card.Header className="text-center">Order Summary</Card.Header>
        <Card.Body>
          {Object.keys(myData).map((data, index) => {
            return (
              <Accordion key={index}>
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>
                    {getServiceName(data)} - {categoryTotal[data]}
                  </Accordion.Header>
                  <Accordion.Body>
                    {myData[data].map((val, idx) => {
                      return (
                        <p key={idx}>
                          {val.name} - {val.price}
                        </p>
                      );
                    })}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
          <hr />
          <p>Net Total : {props.netTotal}</p>
          <p>Discount : {props.discount}</p>
          <Alert variant="success">
            Grand Total : <b>{props.grandTotal}</b>
          </Alert>
        </Card.Body>
        <Card.Footer>
          <Button variant="warning" className="w-100">
            <i className="bi bi-plus"></i>Create Sales
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}
