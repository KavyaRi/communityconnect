import React, { useState } from "react";
import './BecomeAMentor.css';
import Navbar from "./Navbar";
import {Helmet} from "react-helmet";
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { ReactSession } from 'react-client-session';
import logo from './logo1.png';
import './Header.css';
import {Multiselect} from 'multiselect-react-dropdown'
import data from './Data.json'

toast.configure()
const BecomeAMentor = () => {
        const [Des,setDes] = useState("");
        const fixedRegdNo = ReactSession.get("Registernum");
        const name = ReactSession.get("Name")
        const tel = ReactSession.get("Tele")
        const [selectedValue, setSelectedValue] = useState([]);
        
        const handleChange = (e) => {
            setSelectedValue(Array.isArray(e) ? e.map(x => x.Course) : []);
        }
        const handleRemove = (selectedList, removedItem) => {
            setSelectedValue(Array.isArray(selectedValue) ? selectedList.filter(list=> list.Course !== removedItem.Course).map(x => x.Course) : []);
        }

        const [options] = useState(data);
        const Mutlislect_style = 
            {
                "chips": {
                  "background": "#8bc540"
                },
                "searchBox": {
                  "border": "none",
                  "border-bottom": "1px solid blue",
                  "border-radius": "0px"
                },
                "multiselectContainer": {
                  "color": "black"
                }
              }


    let history = useNavigate();
    
    const signup1 = () => {
      Axios.post('http://localhost:3001/signup1', {
        Name: name,
        RegistrationNumber: fixedRegdNo,
        Des: Des,
        Tags: JSON.stringify(selectedValue),
        Telegram: tel
      }).then((response) => {
        if (response.data.message) {
          toast.success(response.data.message,{position:toast.POSITION.TOP_CENTER});
          history('/home');
        }
        else {
          history("/");
        }
      });
    };

    
    const pdelete = () => {
        if(window.confirm('Do you really want to delete your mentor account?')){
            Axios.post('http://localhost:3001/pdelete',{
                RegistrationNumber: fixedRegdNo
            }).then((response) => {
                if(response.data.message){
                    toast(response.data.message);
                    history('/home');
                }
            })
        }  
    }

        function handleSubmit(event) {
            event.preventDefault();
        }

        function validateForm(){
            return selectedValue.length > 0 && Des.length > 50;
        }
        return (

            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
                    <script src="https://cdn.rawgit.com/harvesthq/chosen/gh-pages/chosen.jquery.min.js"></script>
                    <link href="https://cdn.rawgit.com/harvesthq/chosen/gh-pages/chosen.min.css" rel="stylesheet"/>
                    
                </Helmet>
                <Navbar />
                <div className = "container">
                <div className = "row row-content align-items-center">
                    <div className="col-12 mt-5">
                        <h1 className = "mt-5">Become A Mentor</h1> 
                        <hr></hr>
                    </div>
                    <div className="col-12 col-sm-6 mt-5">
                        <div className="card mt-5">
                        <h1 className="card-header bg-warning text-black">
                        <h3 className = "mt-5"></h3>
                        Request Form
                        <h3></h3>
                        </h1>
                        <div className="card-body mt-5">
                            <form className = "form12" method="post" onSubmit={handleSubmit}>
                            <div class="form-group row">
                                <label className="col-md-4 col-form-label"><h4>Register Number -</h4></label>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="RegdNo" defaultValue={fixedRegdNo} readOnly/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-4 col-form-label"><h4>Add Skill -</h4></label>
                                <div className="Dropdown--menu col-md-6">
                                    <Multiselect 
                                        style = {Mutlislect_style}  
                                        options={options} 
                                        displayValue = "Course" 
                                        onSelect={handleChange} 
                                        onRemove={handleRemove}
                                    />
                                </div>
                                {selectedValue}
                            </div>
                            <div className = "form-group row">
                                <label className="col-md-6 col-form-label"><h4>Description(upto 400 characters)</h4></label>
                                <div className="col-10">
                                    <textarea rows="4" cols="25" className="form-control" placeholder="Description" onChange={(e)=>setDes(e.target.value)} value={Des}/>
                                </div>
                            </div>
                            <div className = "form-group row">
                                <div className="col-md-5 align-center mt-5">
                                    <button type="submit" class="btn btn-success" disabled={!validateForm()}  onClick={()=>{signup1();}}><h4>Become a Mentor</h4></button>
                                </div>
                                <div className="col-md-6 align-center mt-5">
                                    <button type="submit" class="btn1 btn-danger" onClick={()=>{pdelete();}}><h4>Delete Your Account</h4></button>
                                </div>
                            </div>
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
        );
}

export default BecomeAMentor;