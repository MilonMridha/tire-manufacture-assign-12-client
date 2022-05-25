
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Pages/Shared/Navbar/Navbar';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/Login/SignUp';
import Purchase from './Components/Pages/Purchase/Purchase';
import RequireAuth from './Components/Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MyOrder from './Components/Pages/Dashboard/MyOrder';
import Payment from './Components/Pages/Dashboard/Payment';
import AdReview from './Components/Pages/Dashboard/AdReview';
import MyProfile from './Components/Pages/Dashboard/MyProfile';
import AllUsers from './Components/Pages/Dashboard/AllUsers';
import AddProduct from './Components/Pages/Dashboard/AddProduct';
import ManageProduct from './Components/Pages/Dashboard/ManageProduct';
import ManageAllOrder from './Components/Pages/Dashboard/ManageAllOrder';
import NotFound from './Components/Pages/Shared/NotFound';
import Blogs from './Components/Pages/Blogs/Blogs';
import Portfolio from './Components/Pages/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='review' element={<AdReview></AdReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='user' element={<AllUsers></AllUsers>}></Route>
          <Route path='add' element={<AddProduct></AddProduct>}></Route>
          <Route path='manage' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='allOrder' element={<ManageAllOrder></ManageAllOrder>}></Route>


        </Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/blog' element={<Blogs></Blogs>}></Route>
          <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
