import React from "react";
import Navbar from "./Navbar.js";
import './MentorshipGuidelines.css'
import { MentorGuidelines } from "./MentorGuidelines.js";
import { MenteeGuidelines } from "./MenteeGuidelines.js";
import ApplyGuidelines from "./ApplyGuidelines.js";
import { Link } from "react-router-dom";
import FooterComponent1 from "./FooterComponent1.js";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function MentorshipGuidelines1() {    
return (
	<div> 
        <Navbar />
        <div class = "container mt-5">
            <div className="row mt-5">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/Home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Guidelines</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <hr />
                </div>                
            </div>
            <div class = "row row-header">
                <div class="col-12 col-sm-6 mt-5">
                    <h1 className="h1--guidelines">Mentor Guidelines</h1>
                    <p>Being a great mentor doesn’t have to be hard, but it can be a bit confusing to get started.</p>
                    <p>Below are some of the ways you can go from a good mentor to a great mentor.</p>
                </div>
                <div class="col-12 col-sm align-self-center">
                    <div className="accordion">
                        {MentorGuidelines.map(({ title, content }) => (
                        <ApplyGuidelines title={title} content={content} />
                        ))}
                    </div>
                </div>
                <div class ="col-12 col-sm-12 mt -5">
                    <hr></hr>
                </div>
                <div class="col-12 col-sm-6 mt-5">
                    <h1 className="h1--guidelines">Mentee Guidelines</h1>
                    <p className="p--guidelines">Congratulations on taking the first step to being a mentee!</p>
                    <p>Here are some guidelines for how to be a great mentee and get the most out of our mentorship.</p>
                </div>
                <div class="col-12 col-sm align-self-center">
                    <div className="accordion">
                        {MenteeGuidelines.map(({ title, content }) => (
                        <ApplyGuidelines title={title} content={content} />
                         ))}
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
        <FooterComponent1 />
    </div>
    );
}

export default MentorshipGuidelines1;