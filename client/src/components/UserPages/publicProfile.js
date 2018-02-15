import React from "react";
import "./publicProfile.css";
// import "./profile.jpg";
// import { Card } from "react-materialize";
const publicProfile = props => (
    <div>
                <div className="card">
                    <div className="card-content">
                        {/* <div className="profileimage">
                            <Image src="/Users/jaxin/Desktop/date.create/client/src/components/UserPages/profile.jpg" size = "small" wrapped />
                            </div> */}
                        <img id="profileimage" src="../assets/images/profile.png" alt="My profile"></img>
                            <p id="name"> Jaxin San Filippo  </p>                   
                    </div>
                        <div className="card-tabs">
                            <ul className="tabs tabs-fixed-width">
                                <li className="tab">
                                    <a href="#test4">Test 1</a>
                                </li>
                                <li className="tab">
                                    <a className="active" href="#test5">Test 2</a>
                                </li>
                                <li className="tab">
                                    <a href="#test6">Test 3</a>
                                </li>
                            </ul>
                        </div>
                    </div>
    </div>
   );

   export default publicProfile;
