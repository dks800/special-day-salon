import React from "react";
import { Card } from "react-bootstrap";

export default function DashboardCard({ img, title, changeRoute, myRoute }) {
  return (
    <Card style={{ width: "18rem" }} onClick={() => changeRoute(myRoute)}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title as="h4">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
