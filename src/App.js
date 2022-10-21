import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './css/sb-admin-2.css';
import './css/fontawesome-free/css/all.min.css';

import { useFormik } from "formik";
import Login from "./action-creators/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./action-creators/Register";
import Profile from "./action-creators/profile";
import Edituser from "./action-creators/Edituser";


function App() {

  return <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Login />}></Route>
      <Route  path='/register' element={<Register />}></Route>
      <Route  path='/profile' element={<Profile />}></Route>
      <Route  path='/edituser/:id' element={<Edituser />}></Route>
    </Routes>
  </BrowserRouter>
}

export default App;
