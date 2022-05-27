import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UsersRow from './UsersRow';

const AllUser = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://powerful-eyrie-01032.herokuapp.com/user').then(res => res.json()))
  if (isLoading) {
    return <Loading></Loading>
  }
  return (

    <div>
      <h1>hello user {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make Admin</th>

            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <UsersRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UsersRow>)
            }

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AllUser;