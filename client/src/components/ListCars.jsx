import React from 'react';
import moment from 'moment';

const ListCar = (props) => (
  <div className="card mb-3" style={{maxWidth: '540px'}}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src={props.car.imgUrl} className="card-img" alt="Car" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{props.car.type}-{props.car.Model}</h5>
          <p className="card-text">{props.car.description}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Price: {props.car.price}</li>
            <li className="list-group-item">Kilometres: {props.car.kilometre}</li>
            <li className="list-group-item">Year: {moment(props.car.year).format('DD/MM/YYYY')}</li>
          </ul>
          <div className="card-footer bg-transparent border-top-0">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">{props.car.contact}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ListCar;