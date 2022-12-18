import React, { useState } from "react";
import './SignUp.css';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import Navbar1 from "./Navbar1";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

toast.configure();
const SignUp = () => {
  const [FirstName, setFirstname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [LastName,setLastname] = useState("");
  const [RegistrationNumber,setRegdno] = useState("")
  const [Password1, setPassword1] = useState("");
  const [Username,setUsername] = useState("");

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/login`; 
    navigate(path);
  }

  var email,p1,p2;
  const register1 = () => {
    email =  Email
    p1 = Password
    p2 = Password1
    if(validator.isEmail(email) && p1 === p2){
      Axios.post('http://localhost:3001/register1', {
        RegistrationNumber: RegistrationNumber,
        FirstName: FirstName,
        LastName: LastName,
        Password: Password,
        Email: Email,
        Username: Username
      }).then((res) => {
        if(res.data.message !== "Registered"){
          toast(res.data.message,{position:toast.POSITION.TOP_CENTER});
          routeChange();
        }
        else{
          toast(res.data.message,{position:toast.POSITION.TOP_CENTER});
          routeChange();
        }
      });
    }
    else if(p1 !== p2){
      toast("Both the passwords do not match")
    }
    else{
      toast("Please enter all the fields or check Your email is correct or not.")
    }
  };

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
              <BreadcrumbItem><Link to="/login">Login</Link></BreadcrumbItem>
              <BreadcrumbItem active>Signup</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
              <h3>Signup</h3>
              <hr />
          </div>                
        </div>
          <div className = "row row-content align-items-center">
            <div className="col-12 col-sm-6">
              <div className="card">
                <h1 className="card-header bg-warning text-black">
                <h3 className = "mt-5">SignUp Form</h3>
                </h1>
                <div className="card-body mt-5">
                  <form className = "form" method="post" onSubmit={handleSubmit}>
                    <div class="form-group row">
                      <label className="col-md-4 col-form-label"><h4>Register Number -</h4></label>
                        <div className="col-md-6">
                          <input type="text" className="form-control" placeholder="RegdNo" onChange={(e)=>setRegdno(e.target.value)} value={RegistrationNumber} required/>
                        </div>
                    </div>
                    <div class="form-group row">
                      <label className="col-md-4 col-form-label"><h4>First Name -</h4></label>
                        <div className="col-md-6">
                          <input type="text" className="form-control" placeholder="First name"  onChange={(e)=>setFirstname(e.target.value)} value={FirstName} required/>
                        </div>
                    </div>
                    <div class="form-group row">
                      <label className="col-md-4 col-form-label"><h4>Last Name -</h4></label>
                        <div className="col-md-6">
                          <input type="text" className="form-control" placeholder="Last name"  onChange={(e)=>setLastname(e.target.value)} value={LastName} required/>
                        </div>
                    </div>
                    <div class="form-group row">
                      <label className="col-md-4 col-form-label"><h4>Email -</h4></label>
                        <div className="col-md-6">
                          <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={Email} required/>
                        </div>
                    </div>
                    <div class="form-group row">
                      <label className="col-md-4 col-form-label"><h4>Telegram -</h4></label>
                        <div className="col-md-6">
                        <input type="username" className="form-control" placeholder="Enter Telegram username" onChange={(e)=>setUsername(e.target.value)} value={Username} required/>
                        </div>
                    </div>
                    <div class="form-group row">
                      <label className="col-md-4 col-form-label"><h4>Password   -</h4></label>
                        <div className="col-md-6">
                          <input type="Password" className="form-control" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} value={Password} required/>
                        </div>
                    </div>
                    <div class="form-group row">
                      <label className="col-md-4 col-form-label"><h4>Re Enter Password   -</h4></label>
                        <div className="col-md-6">
                          <input type="Password" className="form-control" placeholder="Confirm password" onChange={(e)=>setPassword1(e.target.value)} value={Password1} required/>
                        </div>
                    </div>
                    <div className="col-md-4 align-center mt-5">
                      <button type="submit" class="btn btn-success col-md-10" onClick={()=>{register1()}}><h4>Sign In</h4></button>
                    </div>
                    <p className="forgot-password text-right mt-5">
                    Already registered <Link to="/login">log in?</Link>
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

export default SignUp;