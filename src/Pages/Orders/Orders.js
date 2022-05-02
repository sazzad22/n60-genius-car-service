import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Orders = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    //direct fetch na kore async await diye korte hole another fucntion declare korte hobe
    const getOrder = async () => {
      const url = `http://localhost:5000/order?email=${user.email}`;
      const { data } = await axios.get(url);
      setOrder(data);
    };
  }, []);
  return (
    <div>
      <h2>Your Orders:</h2>
    </div>
  );
};

export default Orders;
