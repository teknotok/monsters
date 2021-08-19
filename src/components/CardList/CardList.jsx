import React from "react";
import { Card } from "../Card/Card";
import "./cardList.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monstersProps.map((item) => (
        <Card key={item.id} monster={item}></Card>
      ))}
    </div>
  );
};
