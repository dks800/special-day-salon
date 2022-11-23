import React from "react";
import salesImg from "../img/sales.jpg";
import serviceImg from "../img/services.png";
import customerImg from "../img/customers.jpg";
import DashboardCard from "./DashboardCard";
import { useNavigate } from "react-router-dom";

export default function DashboardList() {
  const navigate = useNavigate();
  let cardList = [
    { img: salesImg, title: "Sales", pageRoute: "/sales" },
    {
      img: serviceImg,
      title: "Manage Services",
      pageRoute: "/manage-services",
    },
    { img: customerImg, title: "Sales Summary", pageRoute: "/sales-summary" },
  ];

  const changePageRoute = (routeToChange) => {
    navigate(routeToChange);
  };
  return (
    <div className="card-list">
      {cardList.map((item, index) => {
        return (
          <DashboardCard
            key={index}
            img={item.img}
            title={item.title}
            changeRoute={changePageRoute}
            myRoute={item.pageRoute}
          />
        );
      })}
    </div>
  );
}
