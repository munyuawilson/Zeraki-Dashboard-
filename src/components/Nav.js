import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from "./Dashboard";


const SchoolManagement = () => <div>School Management Content</div>;
const Invoices = () => <div>Invoices Content</div>;
const Collections = () => <div>Collections Content</div>;
const Login = () => <div>Login Content</div>;
const Register = () => <div>Register Content</div>;
const Logout = () => <div>Logout Content</div>;
function Nav(){

    return(
    <Router>
    <div className="container-fluid p-0 d-flex h-100 ">
    <div id="bdSidebar" className="d-flex flex-column height 
                flex-shrink-0 
                p-3 bg-success
                text-white offcanvas-md offcanvas-start">

      <a href="#" className="navbar-brand"> Zeraki Dashboard

      </a><hr />
      <ul className="mynav nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-1">
          <Link to='/Dashboard'>
            <i className="fa-regular fa-user" />
            Dashboard
          </Link>
        </li>
        <li className="nav-item mb-1">
          <a href="#">
            <i className="fa-regular fa-bookmark" />
            School Management
            <span className="notification-badge">5</span>
          </a>
        </li>
        <li className="nav-item mb-1">
          <a href="#">
            <i className="fa-regular fa-newspaper" />
            Invoices
          </a>
        </li>
        <li className="nav-item mb-1">
          <a href="#">
            <i className="fa-solid fa-archway" />
            Collections
          </a>
        </li>
        
        <li className="sidebar-item  nav-item mb-1">
          <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#settings" aria-expanded="false" aria-controls="settings">
            <i className="fas fa-cog pe-2" />
            <span className="topic">Settings </span>
          </a>
          <ul id="settings" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="fas fa-sign-in-alt pe-2" />
                <span className="topic"> Login</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="fas fa-user-plus pe-2" />
                <span className="topic">Register</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="fas fa-sign-out-alt pe-2" />
                <span className="topic">Log Out</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <div className="d-flex">
        <i className="fa-solid fa-book  me-2" />
        <span>
          <p className="pb-5 mb-0">Zeraki Sales Dashboard
          
          </p>
        </span>
      </div>
    </div>
    <div className="bg-light flex-fill">
      <div className="p-2 d-md-none d-flex text-white bg-success">
        <a href="#" className="text-white" data-bs-toggle="offcanvas" data-bs-target="#bdSidebar">
          <i className="fa-solid fa-bars" /> 
        </a>
        <span className=""> Zeraki Sales Dashboard</span>
      </div>
      <div className="p-4">
        
        <hr />
        <div className="row">
          <div className="col">
            
            <Routes>
                  <Route path="/Dashboard" element={<Dashboard />} />
                  
                </Routes>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</Router>
    )
}
export default Nav;