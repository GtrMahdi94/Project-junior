import React from "react";
import ListCar from "./ListCars.jsx";

const List = (props) => (
  <div >

    There are {props.cars.length} cars.
    {props.cars.map((car, index) => (
      <div key={index}>
        <ListCar car={car} />
      </div>
    ))}
  </div>
);

export default List;
