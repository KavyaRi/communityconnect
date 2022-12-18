import axios from "axios";
import React from "react";
import Navbar from './Navbar'
import './Mentors.css'
import { ReactSession } from "react-client-session";
import MenteeProfileDisplay from './MenteeProfileDisplay'
import NoResults from "./NoResults";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

class MentorProfile extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			data: [],
			mentor:false
		}
	}


	componentDidMount(){
		axios.post('http://localhost:3001/displaymentees',{mentor:ReactSession.get("Registernum")})
				.then(response =>{
					this.setState({
					data: response.data
					})
				})
	}

  render() {
	const {data} = this.state
    return (
		<div className="mentor-body">
			<Navbar />
			<div className="container">
			<div className="row mt-5">
				<Breadcrumb>
					<BreadcrumbItem><Link to="/Home">Home</Link></BreadcrumbItem>
					<BreadcrumbItem active>MyMentee</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h4>My Mentees</h4>
					<hr />
				</div>                
			</div>
			<div>
			{data.length === 0 ? <NoResults data = "You don't have any mentees"/> : <div className="mentor-contacts">{data.map(da => <div key={da.cause}><MenteeProfileDisplay mentee={da.mentee} cause={da.cause} menteeTelegram={da.menteeTelegram}/></div>)}</div>}
			</div>
		</div>
		<div className="col-12 mt-5">
			<hr />
		</div> 
		</div>
    );
  }
}

export default MentorProfile;