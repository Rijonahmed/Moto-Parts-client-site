import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
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
        <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>




        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>


        </Route>



        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}



export default App;
