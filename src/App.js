import { Route, Routes } from 'react-router-dom';
import './App.css';
import BusinessSummary from './Pages/Home/BusinessSummary';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Home/Reviews';
import NotFound from './Pages/Not-found/NotFound';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/businessSummary' element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}



export default App;
