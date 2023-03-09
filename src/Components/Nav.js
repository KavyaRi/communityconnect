
import React, {Component} from "react";
import logo from './logo1.png';
import {Link} from 'react-router-dom'
import { ReactSession } from "react-client-session";
import './Navbar.css'
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,DropdownMenu, DropdownItem,ButtonDropdown, DropdownToggle} from "reactstrap";

class Navbari extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isDropOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.DropDown = this.DropDown.bind(this);
    }
    toggleNav() {
        this.setState({
        isNavOpen: !this.state.isNavOpen
        });
    }
    DropDown() {
        this.setState({
        isDropOpen: !this.state.isDropOpen
        });
    }
    render() {
        const text = "      "+ReactSession.get("Registernum");

        const name = ReactSession.get("Name");
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src={logo} height="50" width="75" 
                                    alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <Link className="Navlink" to="/home"> 
                                        <h2><span className="ml-5 fa fa-home fa-lg"></span> Menu </h2>
                                    </Link> 
                                </NavItem>    
                                <NavItem>
                                    <Link className="Navlink" to="/mentorship-guidelinesin"> 
                                        <h2><span className="ml-5 fa fa-info fa-lg"></span>  Guidelines</h2>
                                    </Link>    
                                </NavItem> 
                                <NavItem>
                                    <Link className="Navlink" to="/mentors"> 
                                        <h2><span className="ml-5 fa fa-users fa-lg"></span>  Mentors</h2>
                                    </Link>    
                                </NavItem> 
                                <NavItem>
                                    <Link className="Navlink" to="/become-a-mentor"> 
                                        <h2><span className="ml-5 fa fa-user fa-lg"></span>  BecomeAMentor</h2>
                                    </Link>    
                                </NavItem>
                                <NavItem>
                                    <Link className="Navlink" to="/chat"> 
                                        <h2><span className="ml-5 fa fa-comments fa-lg"></span>  Chat</h2>
                                    </Link>    
                                </NavItem> 
                                <NavItem>
                                    <Link className="Navlink" to="/SetAvather"> 
                                        <h2><span className="ml-5 fa fa-camera fa-lg"></span>  Avathar</h2>
                                    </Link>    
                                </NavItem> 
                                <NavItem>
                                    <ButtonDropdown isOpen={this.state.isDropOpen} toggle={this.DropDown}>
                                        <DropdownToggle className = " Button ml-5 mt-3 " id="dropdown-toggle-button">
                                            <h2 className="ml-auto"><span className="fa fa-user-circle lg "></span>Profile</h2>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header><h2 className="text-dark"><span class="fa fa-android lg"></span> {text}</h2></DropdownItem>
                                            <DropdownItem header><h2 className="text-dark"> {name}</h2></DropdownItem>
                                            <DropdownItem className="dropdown-items" style={{textDecoration:"none"}}><Link to="/updateprofile" ><h2><span className="fa fa-bell lg"></span>Update Profile</h2></Link></DropdownItem>
                                            <DropdownItem className="dropdown-items" style={{textDecoration:"none"}}><Link to="/requests" ><h2><span className="fa fa-edit lg"></span>Requests</h2></Link></DropdownItem>
                                            <DropdownItem className="dropdown-items" style={{textDecoration:"none"}}><Link to="/mentorprofile" ><h2><span className="fa fa-user lg"></span>My Mentors</h2></Link></DropdownItem>
                                            <DropdownItem className="dropdown-items" style={{textDecoration:"none"}}><Link to="/menteeprofile" ><h2><span className="fa fa-user lg"></span>My Mentees</h2></Link></DropdownItem>
                                            <DropdownItem className="dropdown-items" style={{textDecoration:"none"}}><Link to="/" ><h2><span className="fa fa-sign-out lg"></span>Logout</h2></Link></DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </NavItem>  
                            </Nav>
                        </Collapse>    
                    </div>
                </Navbar>
            </>
        )

    }
}
export default Navbari;