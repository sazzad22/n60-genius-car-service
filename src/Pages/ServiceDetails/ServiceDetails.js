import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h3>Details:{serviceId}</h3>
      <h3>Name: {service.name}</h3>
      <Link to="/checkout">
        <button className="btn btn-primary">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetails;
