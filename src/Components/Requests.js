import React,{useState} from "react";
import './Requests.css'
import SentRequests from './SentRequests'
import ReceivedRequests from "./ReceivedRequests";
import Navbar from "./Navbar";
import './requests.png'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import FooterComponent1 from "./FooterComponent1.js";

function Requests() {
    const buttonErase = {
        border: "none",
        backgroundColor: "#444444",
        color:"white",
        padding:"7px 20px 7px 20px",
        borderRadius: "10px 0px 0px 10px" 
    }
    const buttonRe = {
        border: "2px solid #444444",
        backgroundColor: "white",
        color:"#444444",
        padding:"5px 15px 5px 15px",
        borderRadius: "0px 10px 10px 0px"
    }
    const [bools, setBool] = useState('0');
    function handleClick() {
        setBool('1')
    }
    function handleClick1() {
        setBool('2')
    }
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row mt-5">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/Home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>requests</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h4>Requests</h4>
                        <hr />
                    </div>                
                </div>
                <div>
                    <div className="row row-content align-center">
                        <div className="col-12">
                            <button style = {buttonErase} onClick={handleClick} >Sent Requests</button>
                            <button style = {buttonRe} onClick={handleClick1}>Received Requests</button>
                        </div>   
                        <div className="col-12">
                            {bools === '0' ? <div style={{marginTop:"40px"}}><img src="./requests.png" alt="requests"/><h4 style={{fontSize:"35px"}}>Select any one type of request</h4></div> : <div>
                            {bools==='1' && <SentRequests />}
                            {bools==='2' && <ReceivedRequests />}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent1 />
        </div>
    );
}

export default Requests;