import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import LogIn from './Pages/Authentication/LogIn';
import Register from './Pages/Authentication/Register';
import RequireAuth from './Pages/Authentication/RequireAuth';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import AllUser from './Pages/Dashboard/AllUser';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import BusinessSummary from './Pages/Home/BusinessSummary';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Home/Reviews';
import NotFound from './Pages/Not-found/NotFound';
import Purchase from './Pages/Purchase-Page/Purchase';
import Navbar from './Pages/Shared/Navbar';
import Blog from './Pages/Text-Page/Blog';
import MyPortfolio from './Pages/Text-Page/MyPortfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/businessSummary' element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/purchase/:purchaseId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>

        }></Route>
        <Route path='/logIn' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>




        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>

        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='allUser' element={<AllUser></AllUser>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageAllOrder' element={<ManageAllOrder></ManageAllOrder>}></Route>


        </Route>



        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer />

    </div>
  );
}



export default App;
