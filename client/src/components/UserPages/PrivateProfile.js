import React, { Component } from "react";
import "./PrivateProfile.css";
import API from "../../utils/API";
// import ProfileCard from "../ProfileCard/ProfileCard";

class PrivateProfile extends Component {
    state = {
        result: [],
        search: ""
    };
    componentDidMount() {
        this.loadUserData();
    };
    loadUserData = (id) => {
        API.getUserData(id)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <img id="profileimage" src="../assets/images/profile.png" alt="My profile"></img>
                    <p id="name"> Jaxin San Filippo  </p>
                </div>
                <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                        <li className="tab">
                            <a href="#test4">date.</a>
                        </li>
                        <li className="tab">
                            <a className="active" href="#test5">date.</a>
                        </li>
                        <li className="tab">
                            <a href="#test6">date.</a>
                        </li>
                        <li className="tab">
                            <a href="#test7">date.</a>
                        </li>
                        <li className="tab">
                            <a href="#test8">date.</a>
                        </li>
                        <li className="tab">
                            <a href="#test9">date.</a>
                        </li>
                    </ul>
                </div>
            </div>)


    }
}
export default PrivateProfile;