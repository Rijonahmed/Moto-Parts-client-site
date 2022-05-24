import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }


  }, [user])

  return (
    <div>
      <h1>My Order {orders.length}</h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>

            {
              orders.map((order, index) => <tr>
                <th>{index + 1}</th>
                <td>{order.userNmae}</td>
                <td>{order.userEmail}</td>
                <td>{order.partsNmae}</td>
                <td>{order.userQuantity}</td>
                <td>{order.totalPrice}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
              </tr>)
            }




          </tbody>
        </table>
      </div>


    </div>
  );
};

export default MyOrder;