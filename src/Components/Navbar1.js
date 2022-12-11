import React, {Component} from "react";
import {Menuitems1} from "./Menuitems1";
import './Navbar.css';
import logo from './logo1.png';
import {Link} from 'react-router-dom'
import {Navbar, NavbarBrand } from "reactstrap";

 class Navbar1 extends Component {
     state = {clicked: false}
     handleClick = () => {
         this.setState({clicked: !this.state.clicked})
     }


     render() {
         return (
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/"><img src={logo} alt="logo" height='50px' width='75px' /></NavbarBrand>
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            {Menuitems1.map((item, index) => {
                                return (
                                    <li>
                                        <Link to = {item.url} className={item.cName}>{item.title}</Link>
                                        {/* <a className={item.cName} href={item.url}>{item.title}</a> */}
                                    </li>
                                )
                            })}
                        </ul>
                </div>
             </Navbar>
         )

     }
 }
export default Navbar1;