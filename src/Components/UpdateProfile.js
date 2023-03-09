import React from "react";
import './BecomeAMentor.css';
import Navbar from "./Navbar";
import {Helmet} from "react-helmet";
import axios from 'axios'
import { toast } from "react-toastify";
import { ReactSession } from 'react-client-session';
import {Multiselect} from 'multiselect-react-dropdown'
import data from './Data.json'
import Header1 from "./Header1";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import FooterComponent1 from "./FooterComponent1.js";

class UpdateProfile extends React.Component{

    constructor(props){
		super(props)

		this.state = {
			data1: "",
            Des: "",
            selectedValue: "",
            options: data,
            mentor: false
		}
	}
    
    
    componentDidMount(){
            axios.post('http://localhost:3001/getdetails',{mentor:ReactSession.get("Registernum")})
		        .then((response) =>{
			        this.setState({
				        data1: response.data.Tags,
                        Des : response.data.Des
			        })
		        })      
	}

    render() {
        const handleChange = (e) => {
            this.setState({
                selectedValue:(Array.isArray(e) ? e.map(x => x.Course) : [])
            })
        }
        const handleRemove = (selectedList, removedItem) => {
            this.setState({
                selectedValue:(Array.isArray(this.state.selectedValue) ? selectedList.filter(list=> list.Course !== removedItem.Course).map(x => x.Course) : [])
            })
        }
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

        function handleSubmit(event) {
            event.preventDefault();
        }
    
    var details =this.state.data1
    details = details.replace("[","")
    details = details.replaceAll("[",",")
    details = details.replaceAll("]","")
    details = details.replaceAll('"'," ")
    const arr = details.split(",")

    const update = () =>  {
        axios.post('http://localhost:3001/updatedetails', {
            mentor : ReactSession.get("Registernum"),
            Tags : JSON.stringify(this.state.selectedValue) ,
            Des : this.state.Des
        }).then((response) => {
            if (response.data.message) {
              toast.error(response.data.message,{position:toast.POSITION.TOP_CENTER});
            }
            else {
              toast.success("Your details has been updated successfully")
            }
          });
        }
        return (
        <div>
            {this.state.data1.length === 2 && this.state.Des.length === 0 ? <Header1 message="You need to be mentor first"/>:<div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
                    <script src="https://cdn.rawgit.com/harvesthq/chosen/gh-pages/chosen.jquery.min.js"></script>
                    <link href="https://cdn.rawgit.com/harvesthq/chosen/gh-pages/chosen.min.css" rel="stylesheet"/>
                    
                </Helmet>
                
                <Navbar />
                <div className="container">
                <div className="row mt-5">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/Home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Update</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h4>Update your Profile</h4>
                        <hr />
                    </div>                
                </div>
                    <div className = "row row-content align-items-center">
                        <div className="col-12 col-sm-6 mt-5">
                            <div className="card">
                                <h1 className="card-header bg-warning text-black">
                                <h3 className = "mt-5">Request Form</h3>
                                </h1>
                                <div className="card-body">
                                    <form className = "form12" method="post" onSubmit={handleSubmit}>
                                        <div className="contact--tags">
                                            {arr.map((item, index) => {
                                                return (
                                                <span className="contact--tagItem">{item} </span>
                                                )
                                            })}   
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-4 col-form-label"><h4>Add skills --</h4></label>
                                            <div className="Dropdown--menu col-md-6">
                                                <Multiselect 
                                                    style = {Mutlislect_style}  
                                                    options={this.state.options} 
                                                    displayValue = "Course" 
                                                    onSelect={handleChange} 
                                                    onRemove={handleRemove}
                                                    required
                                                />
                                                {this.state.selectedValue}
                                            </div>
                                        </div>
                                        <div className = "form-group row">
                                            <label className="col-md-4 col-form-label"><h4>Description --</h4></label>
                                            <div className="col col-content align-center">
                                                <textarea rows="4" className="form-control" placeholder="Description upto 400 chars" onChange={(e)=>this.setState({Des : e.target.value})} value={this.state.Des} required/>
                                            </div>
                                        </div>
                                        <div className = "form-group row">
                                            <div className="col align-center mt-5">
                                                <button type="submit" class="btn btn-success" onClick={()=>{update()}}><h4>Update Details</h4></button>
                                            </div>
                                        </div>
                                        <div className = "mt-5">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>}
                <FooterComponent1 />
            </div>
            
        );
    }
}

export default UpdateProfile;