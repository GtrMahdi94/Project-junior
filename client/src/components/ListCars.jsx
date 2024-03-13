import React from 'react';
import moment from 'moment';

const ListCar = (props) => (
  <div className="row justify-content-center">
    <div className="col-md-6 mb-3">
      <div className="card" style={styles.card}>
        <img src={props.car.imgUrl} className="card-img-top" alt="Car" style={styles.cardImg} />
        <div className="card-body">
          <h5 className="card-title text-center">{props.car.type}-{props.car.Model}</h5>
          <p className="card-text text-center">{props.car.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between"><strong>Price:</strong> {props.car.price}</li>
          <li className="list-group-item d-flex justify-content-between"><strong>Kilometres:</strong> {props.car.kilometre}</li>
          <li className="list-group-item d-flex justify-content-between"><strong>Year:</strong> {moment(props.car.year).format('DD/MM/YYYY')}</li>
        </ul>
        <div className="card-footer bg-transparent border-top-0 d-flex justify-content-between align-items-center" style={styles.cardFooter}>
          <a href="#" className="card-link">More Details</a>
          <a href="#" className="card-link">{props.car.contact}</a>
        </div>
      </div>
    </div>
  </div>
);

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
  },
  cardImg: {
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    height: '200px',
    objectFit: 'cover',
  },
  cardFooter: {
    padding: '10px 20px',
    backgroundColor: '#f8f9fa',
  },
};

export default ListCar;