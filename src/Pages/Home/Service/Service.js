import React from "react";
import './Service.css'

const Service = ({ service }) => {
  //here prop is an obj itself. key and service are two keys of this object.
  /* const { service } = props;
    console.log(service); */

  const { name, price, img, description } = service;

  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>Price:{price}</p>
      <p>
        <small>{description}</small>
      </p>
    </div>
  );
};

export default Service;
