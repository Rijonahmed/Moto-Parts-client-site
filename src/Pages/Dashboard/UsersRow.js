import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, index, refetch }) => {
  const { email, role } = user
  const makeAdmin = () => {
    fetch(`https://moto-parts-server-site.vercel.app/user/admin/${email}`, {
      method: 'PUT',
    })
      .then(res => res.json())
      .then(data => {
        refetch();
        toast.success('seccessfully an ADMIN');
      })


  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>

    </tr>
  );
};

export default UsersRow;