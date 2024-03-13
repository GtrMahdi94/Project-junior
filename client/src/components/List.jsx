import React from "react";
import ListCar from "./ListCars.jsx";

const List = (props) => (
  <div  >

   <div className="text-white">There are {props.cars.length} cars to sell now.</div> 
    {props.cars.map((car, index) => (
      <div key={index}>
        <ListCar car={car} deletecar={props.deletecar} />
      </div>
    ))}
  </div>
);

export default List;
