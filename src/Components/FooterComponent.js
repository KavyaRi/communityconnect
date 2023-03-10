import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h3>Links</h3>
                    <ul className="list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/guidelines">Guidelines</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h3>Our Address</h3>
                    <address>
		              shri vishnu Engineering College for women<br />
		              Vishnupur, Bhimavaram<br />
		              West Godavari, AndhraPradesh<br />
		              <i className="fa fa-phone fa-lg"></i>: 08816 - 250864<br />
		              <i className="fa fa-fax fa-lg"></i>: 08816 - 250099<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto: info@svecw.edu.in">
                      info@svecw.edu.in</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="Social">
                        <a className="btn btn-social-icon btn-google" href="https://svecw.edu.in/"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <h6>?? Copyright 2023 Community Connect</h6>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
