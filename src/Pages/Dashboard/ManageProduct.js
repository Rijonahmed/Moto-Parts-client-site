import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProduct = () => {

  const [partsed, setPartsed] = useState([]);
  const [isReload, setIsReload] = useState(true);


  useEffect(() => {
    fetch('https://moto-parts-server-api.onrender.com/parts')
      .then(res => res.json())
      .then(data => setPartsed(data))
  }, [isReload])




  const handleDelete = id => {
    const prosceed = window.confirm('Are you sure?');
    if (prosceed) {

      const url = `https://moto-parts-server-api.onrender.com/parts/${id}`;


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

      <div className="overflow-x-auto">
        <table className="table w-full">
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
                <td><div className="avatar">
                  <div className="w-14 rounded">
                    <img src={parts.images} alt="parts images" />
                  </div>
                </div></td>
                <td>{parts.name}</td>
                <td>{parts.price}</td>
                <td>{parts.quantity}</td>
                <td><button onClick={() => handleDelete(parts._id)} className="btn btn-sm btn-outline btn-error">delete</button></td>
              </tr>)
            }




          </tbody>
        </table>
      </div>


    </div>
  );
};

export default ManageProduct;