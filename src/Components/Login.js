import React, { useState } from "react";
import './Login.css'
import Navbar1 from "./Navbar1";
import Axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactSession } from 'react-client-session';
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

toast.configure();
const Login = () => {

    const [RegdNo, setRegdNo] = useState("");
    const [Password, setPassword] = useState("");
    
    const login1 = () => {
      Axios.post('http://localhost:3001/login1', {
        RegdNo: RegdNo,
        Password: Password
      }).then((response) => {
        if (response.data.message) {
          toast.error(response.data.message,{position:toast.POSITION.TOP_CENTER});
        }
        else {
          const Name = response.data[0].FirstName+" "+response.data[0].LastName
          const tel = response.data[0].Telegram
          ReactSession.set("Registernum",RegdNo);
          ReactSession.set("Name",Name);
          ReactSession.set("Tele",tel);
          window.location.assign("/home");
          toast.success("Welcome to Community Connect!!")
        }
      });
    };
    
    function validateForm() {
      return RegdNo.length > 0 && Password.length > 0;
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
                    <BreadcrumbItem active>Login</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>User Login</h3>
                    <hr />
                </div>                
            </div>
            <div className = "row row-content align-items-center">
              <div className="col-12 col-sm-6 ">
                <div className="card">
                  <h1 className="card-header bg-warning text-black">
                  <h3 className = "mt-5">Login Form</h3>
                  </h1>
                  <div className="card-body mt-5">
                    <form className = "form1" method="post" onSubmit={handleSubmit}>
                      <div class="form-group row">
                        <label className="col-md-4 col-form-label"><h4>Register Number -</h4></label>
                          <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Enter RegdNo" onChange={(e)=>setRegdNo(e.target.value)} value={RegdNo}/>
                          </div>
                      </div>
                      <div class="form-group row">
                        <label className="col-md-4 col-form-label"><h4>Password   -</h4></label>
                          <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} value={Password}/>
                          </div>
                      </div>
                      <div className="col-md-4 align-center mt-5">
                        <button type="submit" class="btn btn-primary col-md-10" disabled={!validateForm()} onClick={()=>{login1();}}><h4>Log In</h4></button>
                      </div>
                      <p className="forgot-password text-right mt-5">
                      Forget Password <Link to="/forgetpassword">Click Here!</Link>
                      </p>
                      <p className="forgot-password text-right">
                      Not a registered User <Link to="/SignUp">sign up?</Link>
                      </p>
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
export default Login;