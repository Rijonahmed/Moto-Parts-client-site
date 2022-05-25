import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import usePartsed from '../Hooks/usePartsed';

const ManageProduct = () => {

  const [partsed, setPartsed] = useState([]);
  const [isReload, setIsReload] = useState(true);


  useEffect(() => {
    fetch('http://localhost:5000/parts')
      .then(res => res.json())
      .then(data => setPartsed(data))
  }, [isReload])




  const handleDelete = id => {
    const prosceed = window.confirm('Are you sure?');
    if (prosceed) {

      const url = `http://localhost:5000/parts/${id}`;


      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setIsReload(!isReload)
          toast.success('Your Product has been success')


        })



    }
  }
  return (
    <div className='ml-8'>
      <h1>My Order {partsed.length}</h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Price</th>
              <th>available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              partsed.map((parts, index) => <tr>
                <th>{index + 1}</th>
                <td><div class="avatar">
                  <div class="w-14 rounded">
                    <img src={parts.images} alt="parts images" />
                  </div>
                </div></td>
                <td>{parts.name}</td>
                <td>{parts.price}</td>
                <td>{parts.quantity}</td>
                <td><button onClick={() => handleDelete(parts._id)} class="btn btn-sm btn-outline btn-error">delete</button></td>
              </tr>)
            }




          </tbody>
        </table>
      </div>


    </div>
  );
};

export default ManageProduct;