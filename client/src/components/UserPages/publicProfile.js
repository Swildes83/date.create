import React from "react";
import "./publicProfile.css";
// import "./profile.jpg";
// import { Card } from "react-materialize";
const publicProfile = props => (
    <div>
<<<<<<< HEAD
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
=======
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
>>>>>>> a5a65d119e6338b91d2a52a59251210dfd73ae23
    </div>
);

export default publicProfile;
//