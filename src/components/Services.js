import React, { useState } from "react";
import { Accordion, Tabs, Tab, Spinner } from "react-bootstrap";
import ServiceCategory from "./ServiceCategory";
import { service as serv } from "./utils/utility";

export default function Services(props) {
  let service = serv;
  const [selection, setSelection] = useState([]);

  const userSelection = (data, action) => {
    let oldSelection = [...selection];
    let filteredData = [];
    for (let i = 0; i < oldSelection.length; i++) {
      if (oldSelection[i].serviceCode === data.serviceCode) {
        if (oldSelection[i].categoryCode !== data.categoryCode) {
          filteredData.push(oldSelection[i]);
        }
      } else {
        filteredData.push(oldSelection[i]);
      }
    }
    if (action && action === "add") {
      filteredData.push(data);
    }
    setSelection([...filteredData]);
    updateNetTotalAmount(filteredData);
  };

  const updateNetTotalAmount = (filteredData) => {
    let total = filteredData.map((val) => val.price);
    total = total.reduce((sum, a) => sum + a, 0);
    if (total > 0) {
      props.updateUserSelection(filteredData);
    }
    props.setNetTotal(total);
  };
  return (
    <>
      {service && service.length > 0 ? (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Select a service</Accordion.Header>
            <Accordion.Body>
              <Tabs
                defaultActiveKey={service && service[0].name}
                className="mb-3"
              >
                {service.map((serv, index) => {
                  return (
                    <Tab eventKey={serv.name} title={serv.name} key={index}>
                      {serv.category && serv.category.length > 0 ? (
                        <div className="serv-category">
                          <ServiceCategory
                            userSelection={userSelection}
                            categories={serv.category}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </Tab>
                  );
                })}
              </Tabs>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
}
