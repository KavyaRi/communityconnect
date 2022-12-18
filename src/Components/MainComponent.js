import '../App.css';
import Header from './Header.js';
import Login from './Login.js';
import AdminLogin from './AdminLogin.js';
import BecomeAMentor from './BecomeAMentor.js';
import MentorshipGuidelines from './MentorshipGuidelines.js';
import Mentors from './Mentors.js';
import React ,{Component} from 'react';
import Footer from './FooterComponent';
import SignUp from './SignUp'
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom'
import Header1 from './Header1';
import MentorshipGuidelines1 from './MentorshipGuidelines1';
import ProtedtedRoute from './ProtectedRoute';
import MentorProfile from './MentorProfile';
import MenteeProfile from './MenteeProfile';
import Requests from './Requests'
import ForgetPassword from './ForgetPassword'
import UpdateProfile from './UpdateProfile'

class MainComponent extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path = "/header" element = {<Header />} />
            <Route path = "/guidelines" element = {<MentorshipGuidelines />}/>
            <Route exact path='/Admin' element={< AdminLogin />}></Route>
            <Route exact path='/login' element={< Login />}></Route>
            <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
            <Route path='/signup' element={< SignUp />}></Route>
            <Route path="/redirect" element={ <Navigate to="/Header" /> }/>
            <Route element={<ProtedtedRoute/>}>
              <Route exact path='/home' element={< Header1 />}></Route>
              <Route path='/become-a-mentor' element={< BecomeAMentor />}></Route>
              <Route exact path='/mentorship-guidelinesin' element={<MentorshipGuidelines1/>}></Route>
              <Route path='/mentors' element={< Mentors />}></Route>
              <Route path='/mentorprofile' element={<MentorProfile/>}></Route>
              <Route path='/requests' element={<Requests/>}></Route>
              <Route path="/updateprofile" element={<UpdateProfile />}></Route>
              <Route path='/menteeprofile' element={<MenteeProfile/>}></Route>
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default MainComponent;