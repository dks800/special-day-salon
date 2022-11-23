import React from "react";
import { Table } from "react-bootstrap";
import { service, salesSummary } from "./utils/utility";

export default function SalesSummary() {
  const getServiceOpted = (data) => {
    let selection = "";
    for (let i = 0; i < data.length; i++) {
      let serv = service.filter((user) => user.code === data[i].serviceCode);
      serv = serv[0];
      selection += serv.name;
      let category = serv.category.filter(
        (cat) => cat.categoryCode === data[i].categoryCode
      );
      category = category[0];
      selection = selection + "_" + category.name;
      let subProduct = category.prices.filter(
        (price) => price.code === data[i].priceCode
      );
      subProduct = subProduct[0];
      if (subProduct) {
        selection =
          selection +
          "_" +
          subProduct.name +
          (i === data.length - 2 ? ", " : "");
      }
    }
    return selection;
  };
  return (
    <>
      <div className="manage-service-container container">
        <h2 className="text-center">Sales Summary</h2>
        <div className="summary-list">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Phone Number</th>
                <th>Customer Name</th>
                <th>Service Opted</th>
                <th>Net Total</th>
                <th>Discount</th>
                <th>Grand Total</th>
              </tr>
            </thead>
            <tbody>
              {salesSummary && salesSummary.length > 0
                ? salesSummary.map((summary, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{summary.date}</td>
                        <td>{summary.phoneNumber}</td>
                        <td>{summary.customerName}</td>
                        <td className="service-name">
                          {getServiceOpted(summary.serviceDetails)}
                        </td>
                        <td>{summary.netTotal}</td>
                        <td>{summary.discount}</td>
                        <td>{summary.grandTotal}</td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
