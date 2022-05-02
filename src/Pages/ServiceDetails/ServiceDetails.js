import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetails from "../../hooks/useServiceDetails";
import useServiceDetail from "../../hooks/useServiceDetails";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  return (
    <div>
      <h3>Details:{serviceId}</h3>
      <h3>Name: {service.name}</h3>
      <Link to={`/checkout/${serviceId}`}>
        <button className="btn btn-primary">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetails;
