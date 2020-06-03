import React from "react";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
const Products = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available"
    },
    {
      id: 2,
      name: "Stylised Flip Flops and Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Out of Stock"
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available"
    },
    {
      id: 4,
      name: "ADIDAS Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock"
    }
  ];

  const linkList = productsData.map(product => {
    return (
      <li>
        <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <Row>
        <Col xl={"4"}>
          <div
            style={{
              padding: "10px",
              background: "rgb(240, 240, 240)"
            }}
          >
            <h3> Products</h3>
            <div >
              <ul className="prd"> {linkList} </ul>
            </div>
          </div>
        </Col>
        <Col xl={"8"}>
          <div >
            <Route
              path={`${match.url}/:productId`}
              render={props => <Product data={productsData} {...props} />}
            />
            <Route
              exact
              path={match.url}
              render={() => (
                <div style={{ textAlign: "center" }}>
                  Please select a product.
                </div>
              )}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Products;
