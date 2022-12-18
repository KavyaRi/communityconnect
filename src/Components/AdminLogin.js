import React, { useState } from "react";
import Axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'
import { ReactSession } from 'react-client-session';
import Navbar1 from "./Navbar1";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

toast.configure();
const AdminLogin = () => {

    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    
    const Admin1 = () => {
      Axios.post('http://localhost:3001/Admin1', {
        Name: Name,
        Password: Password
      }).then((response) => {
        if (response.data.message) {
          toast.error(response.data.message,{position:toast.POSITION.TOP_CENTER});
        }
        else {
          const Name = response.data[0].Name+" "
          ReactSession.set("Name",Name);
          window.location.assign("/Components/AdminHome.js");
          toast.success("Welcome to Community Connect!!")
        }
      });
    };
    
    function validateForm() {
      return Name.length > 0 && Password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
      return (
        <div>
        <Navbar1 />
        <div className = "container">
          <div className="row mt-5">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/Header">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Admin</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Admin Login</h3>
                <hr />
            </div>                
          </div>
            <div className = "row row-content align-items-center">
              <div className="col-12 col-sm-6">
                <div className="card">
                  <h1 className="card-header bg-warning text-black">
                  <h3 className = "mt-5">Admin Login Form</h3>
                  </h1>
                  <div className="card-body mt-5">
                    <form className = "form1" method="post" onSubmit={handleSubmit}>
                      <div class="form-group row">
                        <label className="col-md-4 col-form-label"><h4>Name -</h4></label>
                          <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} value={Name}/>
                          </div>
                      </div>
                      <div class="form-group row">
                        <label className="col-md-4 col-form-label"><h4>Password  -</h4></label>
                          <div className="col-md-6">
                            <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} value={Password}/>
                          </div>
                      </div>
                      <div className="col-md-4 align-center mt-5">
                        <button type="submit" class="btn btn-primary col-md-10" disabled={!validateForm()} onClick={()=>{Admin1();}}><h4>Log IN</h4></button>
                      </div>
                      <div className = "mt-5">
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
export default AdminLogin;