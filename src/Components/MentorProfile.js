import axios from "axios";
import React from "react";
import Navbar from './Navbar'
import './MentorProfileDisplay.css'
import { ReactSession } from "react-client-session";
import MentorProfileDisplay from "./MentorProfileDisplay";
import NoResults from "./NoResults";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import FooterComponent1 from "./FooterComponent1.js";

class MenteeProfile extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			data: []
		}
	}


	componentDidMount(){
		axios.post('http://localhost:3001/displaymentors',{mentee:ReactSession.get("Registernum")})
		.then(response =>{
			this.setState({
				data: response.data
			})
			console.log(response.data)
		})
	}

  render() {
	const {data} = this.state
	// console.log("data",data);
    return (
    <div className="mentor-body">
		<Navbar />
		<div className="container">
			<div className="row mt-5">
				<Breadcrumb>
					<BreadcrumbItem><Link to="/Home">Home</Link></BreadcrumbItem>
					<BreadcrumbItem active>MyMentor</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h4>My Mentors</h4>
					<hr />
				</div>                
			</div>
			<div >
				{data.length === 0 ? <NoResults data = "You don't have any mentors"/> : <div className="mentor-contacts">{data.map(da => <div key={da.cause}><MentorProfileDisplay mentor={da.mentor} name={da.name} description={da.Description} tags={da.tags} mentorTelegram={da.mentorTelegram}/></div>)}</div>}
			</div>
		</div>
		<div className="col-12 mt-5">
			<hr />
		</div>   
		<FooterComponent1 />
	</div>
    );
  }
}

export default MenteeProfile
