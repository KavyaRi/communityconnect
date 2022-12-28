import React, { useState } from "react"
import './MenteeAcceptanceProfile.css'
import axios from "axios";
import { ReactSession } from "react-client-session";
import { toast } from "react-toastify";
import './nosentreq.png'

toast.configure()
export default function RequestProfile(props) {
    const[display,setdisplay] = useState(true);
    var num = props.regdno
    return (
            <div>
                {display ? <div className="MenteeProfile-contact-card">
                <h5 className="MenteeProfile-regdno">{props.regdno}</h5>
                <p className="MenteeProfile-cause">{props.cause}</p>
                <div className="contact--buttons">
                    <button className="contact--button-accept">Accept</button>
                    <button className="contact--button-reject">Reject</button>
                </div>
            </div>:null}
            </div>
    )
}