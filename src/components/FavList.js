import React from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
// import Accordion from "react-bootstrap/Accordion";

const FavList = (props) => {
  let favouriteList = props.favourites.map((url, index) => {
    return (
      <Card
        className="card border-dark mb-3 mx-1"
        style={{ width: "16rem" }}
        key={uuidv4()}
        id={index}
      >
        <Card.Img variant="top" src={url} />

        <Button variant="danger" onClick={props.removeFavourite}>
          X
        </Button>
      </Card>
    );
  });

  return (
    <>
      <div className="results">
        <h2>
          Favourites <Badge bg="dark">{favouriteList.length}</Badge>
        </h2>

        <p>Click on 'X' to remove shows from your favourites</p>
      </div>
      <div className="row">{favouriteList}</div>
    </>
  );
};
export default FavList;
