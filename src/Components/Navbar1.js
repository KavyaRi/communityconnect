import React, {Component} from "react";
import logo from './logo1.png';
import './navbar1.css';
import {Link} from 'react-router-dom'
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from "reactstrap";

 class Navbar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }
     render() {
         return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/Header">
                            <img src={logo} height="50" width="75" 
                                    alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <Link className="Navlink" to="/"> 
                                        <h2><span className="fa fa-home fa-lg"></span> Home </h2>
                                    </Link> 
                                </NavItem>    
                                <NavItem>
                                    <Link className="Navlink" to="/guidelines"> 
                                        <h2><span className="ml-5 fa fa-info fa-lg"></span>  Guidelines</h2>
                                    </Link>    
                                </NavItem> 
                                <Nav className="ml-5" navbar>
                                    <NavItem>
                                        <Link to = '/login' className='Navlink'><h2><span className="fa fa-sign-in fa-lg"></span>Login </h2></Link>
                                    </NavItem>
                                </Nav>   
                            </Nav>
                        </Collapse>    
                    </div>
                </Navbar>
                <Jumbotron>   
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6"> 
                                <h1>Community Connect</h1>
                                <p>We are here to Connect the best minds of the campaus to make several fusion experiences, associate and Make your fantacy come true!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron> 
            </>
         )

     }
 }
export default Navbar1;