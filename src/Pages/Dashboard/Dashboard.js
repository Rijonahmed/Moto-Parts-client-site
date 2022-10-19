import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import { FaUsers, FaUserTie, FaSignInAlt, FaCogs, FaCartArrowDown, FaChalkboardTeacher } from "react-icons/fa";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h2 className='text-3xl mt-5 font-bold text-orange-500 text-center'>Dashboard</h2>

        <Outlet></Outlet>

      </div>
      <div className="drawer-side bg-primary ">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-62 bg-base-100 lg:bg-transparent  mt-6 font-bold ">
          {/* <!-- Sidebar content here --> */}
          <li><Link to='/dashboard'><FaUserTie /> My Profile</Link></li>
          {!admin && <li><Link to='/dashboard/myOrder'><FaCartArrowDown /> My Order</Link></li>}
          {!admin && <li><Link to='/dashboard/addReview'><FaChalkboardTeacher /> Add Review</Link></li>}

          {admin && <>
            <li><Link to='/dashboard/allUser'><FaUsers /> All User</Link></li>
            <li><Link to='/dashboard/manageAllOrder'> Manage All Order</Link></li>
            <li><Link to='/dashboard/addProduct'><FaSignInAlt /> Add Product</Link></li>
            <li><Link to='/dashboard/manageProduct'><FaCogs /> Manage Product</Link></li>

          </>}

        </ul>

      </div>
    </div>
  );
};

export default Dashboard;