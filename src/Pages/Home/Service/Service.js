import React from "react";
import { useNavigate } from "react-router-dom";
import './Service.css'

const Service = ({ service }) => {
  //here prop is an obj itself. key and service are two keys of this object.
  /* const { service } = props;
    console.log(service); */
  const navigate = useNavigate();
  const { id,name, price, img, description } = service;
  const handleNavigateTo = (id) => {
    navigate(`/service/${id}`)
  }
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price:{price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button className="btn btn-primary" onClick={()=> handleNavigateTo(id)} >Book:{name}</button>
    </div>
  );
};

export default Service;
