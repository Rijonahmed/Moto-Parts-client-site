import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`https://powerful-eyrie-01032.herokuapp.com/booking?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }


  }, [user])

  return (
    <div>
      <h1>My Order is : {orders.length}</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>payment</th>
            </tr>
          </thead>
          <tbody>

            {
              orders.map((order, index) => <tr>
                <th>{index + 1}</th>
                <td>{order.userNmae}</td>
                <td>{order.partsNmae}</td>
                <td>{order.userQuantity}</td>
                <td>{order.totalPrice}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>
                  {/* {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm btn-success'>buy</button></Link>}
                  {(order.totalPrice && order.paid) && <span className='text-success'>paid</span>} */}

                </td>
              </tr>)
            }




          </tbody>
        </table>
      </div>


    </div>
  );
};

export default MyOrder;