import React  from 'react'
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import UserLogin from "../pages/UserLogin";
import UserRegister from "../pages/UserRegister";
import FoodPartnerLogin from "../pages/FoodPartnerLogin";
import FoodPartnerRegister from "../pages/FoodPartnerRegister";
const AppRoutes=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/user/register" element={<User Register/>}/>
                <Route path="/user/login" element={<User Login/>}/>
                <Route path="/food-partner/register" element={<Food Partner Register/>}/>
                <Route path="/food-partner/login" element={<Food Partner Login/>}/>

            </Routes>
        </Router>
    )
}
export default AppRoutes