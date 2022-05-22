
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Pages/Shared/Navbar/Navbar';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/Login/SignUp';
import Purchase from './Components/Pages/Purchase/Purchase';
import RequireAuth from './Components/Pages/Login/RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
