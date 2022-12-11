import React, { useState } from "react";
import './Login.css'
import logo from './logo1.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar1 from "./Navbar1";
import { Link } from "react-router-dom";
import axios from "axios";
import Login from './Login'
import { ReactSession } from "react-client-session";

toast.configure();
const ForgetPassword = () => {

    const [Password1, setPassword1] = useState("");
    const [Password, setPassword] = useState("");
    const [RegdNo, setRegdNo] = useState("");
    
    const changepassword = () => {
        console.log("method")
        var p1 = Password
        var p2 = Password1
        if(p1 === p2){
            axios.post('http://localhost:3001/changepswd',{
                Password: Password,
                regdno: RegdNo
            }).then((response) => {
                if(response.data.message){
                    toast(response.data.message)
                    window.location.href="/login"
                }
            })
        }
        else{
            toast("Both the passwords didn't match")
        }
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
        return (
            <div>
            <Navbar1 />
            <div className = "container">
              <div className = "row">
                <div className="col-12 mt-5">
                  <h1 className = "mt-5">WELCOME</h1> 
                  <hr></hr>
                </div>
                <div className = "row row-content align-items-center">
                  <div className="col-12 col-sm-6 mt-5">
                    <div className="card mt-5">
                      <h1 className="card-header bg-warning text-black">
                      <h3 className = "mt-5"></h3>
                      Change Password
                      <h3></h3>
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
                            <label className="col-md-4 col-form-label"><h4>New Password   -</h4></label>
                              <div className="col-md-6">
                              <input type="password" className="form-control" placeholder="Enter New Password" onChange={(e)=>setPassword(e.target.value)} value={Password} required/>
                              </div>
                          </div>
                          <div class="form-group row">
                            <label className="col-md-4 col-form-label"><h4>Confirm Password   -</h4></label>
                              <div className="col-md-6">
                              <input type="password" className="form-control" placeholder="Confirm password" onChange={(e)=>setPassword1(e.target.value)} value={Password1} required/>
                              </div>
                          </div>
                          <div className="col-md-6 align-center mt-5">
                            <button type="submit" class="btn btn-success col-md-10" onClick={()=>{changepassword();}}><h4>Change Password</h4></button>
                          </div>
                          <p className="forgot-password text-right mt-5">
                            Go to Login <Link to="/login">Login</Link>
                        </p>
                          <div className = "mt-5">
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <img src={logo} className="App-logo1" alt="logo"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
}

export default ForgetPassword;