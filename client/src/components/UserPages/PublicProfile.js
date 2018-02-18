import React, { Component } from "react";
import "./PublicProfile.css";
import API from "../../utils/API";
import BioData from "../BioData";

const userID = "5a8624f2fe9f971c5c565bb3";

class publicProfile extends Component {
    state = {
        result: [],
        search: ""
    };
    componentDidMount() {
        this.loadUserData(userID);
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
                    <img id="profileimage" src="../assets/profile/ChickenKiller/profile.png" alt="My profile"></img>
                    <p id="name">{this.state.result.screenName}</p>
                </div>
                <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                        <li className="tab">
                            <a href="#test4">BIO</a>
                        </li>
                        <li className="tab">
                            <a className="active" href="#test5">Test 2</a>
                        </li>
                        <li className="tab">
                            <a href="#test6">Test 3</a>
                        </li>
                    </ul>
                </div>
                <BioData />
            </div>)
    }
}
export default publicProfile;
