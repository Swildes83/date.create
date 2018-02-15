import React from "react";
import "./publicProfile.css";

const publicProfile = props => (
    <div>
        <div className="card">
            <div className="card-content">
                <img id="profileimage" src="../assets/images/profile.png" alt="My profile"></img>
                <p id="name"> Jaxin San Filippo  </p>
            </div>
            <div className="card-tabs">
                <ul className="tabs tabs-fixed-width">
                    <li className="tab">
                        <a href="#test4"> Bio </a>
                    </li>
                    <li className="tab">
                        <a className="active" href="#test5"> Interests </a>
                    </li>
                    <li className="tab">
                        <a href="#test6"> Take my Quiz! </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);
//
export default publicProfile;
//