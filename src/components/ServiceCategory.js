import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ServiceCategory(props) {
  const categories = props.categories;

  const selectCategory = (parent, data) => {
    let selection = {
      serviceCode: parent.serviceCode,
      categoryCode: parent.categoryCode,
      name: parent.name,
      subCategoryCode: data.code,
      price: data.price,
    };
    props.userSelection(selection, "add");
  };
  const clearCurrentSelection = (cat, nameToClear) => {
    let parent_el = document.querySelector("[data-parent=" + nameToClear + "]");
    let el = Array.from(parent_el.querySelectorAll("input[type=radio]"));
    el.map((rad) => (rad.checked = false));
    props.userSelection(cat, "");
  };

  return (
    <>
      {categories.map((cat, index) => {
        let name = cat.name.replaceAll(" ", "_").toLowerCase();
        return (
          <Card key={index} data-parent={name} className="mb-3">
            <Card.Header className="text-center">{cat.name}</Card.Header>
            <Card.Body>
              {cat.prices.map((price, idx) => {
                let amount = price.price;
                return !isNaN(amount) ? (
                  <div className="form-check" key={idx}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name={"radio-" + name}
                      onChange={() => selectCategory(cat, price)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      {price.name + " - "}
                      <input
                        type="number"
                        value={price.price}
                        onChange={() => alert("")}
                      />
                    </label>
                  </div>
                ) : (
                  ""
                );
              })}
            </Card.Body>
            <Card.Footer>
              <Button
                variant="secondary"
                className="w-100"
                onClick={() => clearCurrentSelection(cat, name)}
              >
                Clear
              </Button>
            </Card.Footer>
          </Card>
        );
      })}
    </>
  );
}
