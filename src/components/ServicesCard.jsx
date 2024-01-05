import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({props}) => {
    const {_id,title,img,price}=props;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl " />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title">{title}</h2>
          <p>Prices: {price}</p>
          <div className="card-actions">
            <Link to={`/checkOut/${_id}`}><button className="btn btn-primary">CheckOut now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;