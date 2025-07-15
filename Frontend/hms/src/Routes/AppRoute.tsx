import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar.tsx'
import Header from '../Components/Header/Header.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminDashboard from '../layouts/AdminDashboard.tsx';
import Random from '../Components/Random.tsx';
import LoginPage from "../pages/LoginPage.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
           <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/' element= {<AdminDashboard />} >
              <Route path='/dashboard' element= {<Random />} />
              <Route path='/pharmacy' element= {<Random />} />
              <Route path='/patients' element= {<Random />} />
              <Route path='/doctors' element= {<Random />} />
              <Route path='/appointments' element= {<Random />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute
