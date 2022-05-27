import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h2 className='text-3xl mt-5 font-bold text-orange-500 text-center'>Dashboard</h2>

        <Outlet></Outlet>

        {/* <!-- Page content here --> */}
        <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side ">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content mt-6 ">
          {/* <!-- Sidebar content here --> */}
          <li><Link to='/dashboard'>My Profile</Link></li>
          {!admin && <li><Link to='/dashboard/myOrder'>My Order</Link></li>}
          {!admin && <li><Link to='/dashboard/addReview'>Add Review</Link></li>}

          {admin && <>
            <li><Link to='/dashboard/allUser'>All User</Link></li>
            <li><Link to='/dashboard/manageAllOrder'>Manage All Order</Link></li>
            <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
            <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>

          </>}

        </ul>

      </div>
    </div>
  );
};

export default Dashboard;