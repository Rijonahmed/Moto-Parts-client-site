import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const logout = () => {
    signOut(auth);

  };

  const [user] = useAuthState(auth);

  const manuItem = <>
    <li><Link to='/home'>Home</Link></li>
    {/* <li><Link to='/businessSummary'>Business Summary</Link></li> */}

    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/myPortfolio'>My Portfolio</Link></li>
    {
      user && <li><Link to='/dashboard'>Dashboard</Link></li>
    }

    <li>{user ? <button onClick={logout} className="btn btn-ghost">Log Out</button> : <Link to='/logIn'>Log In</Link>}</li>


  </>
  return (
    <div className='sticky top-0 z-10'>
      <div className="navbar bg-accent-content text-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent-content rounded-box w-52">

              {manuItem}

            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to='/' > <h1>Moto <span className='text-orange-500'>Parts By Rijon </span></h1></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {manuItem}

          </ul>
        </div>
        <div className="navbar-end">
          <label tabindex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>


        </div>


      </div>

    </div >
  );
};

export default Navbar;