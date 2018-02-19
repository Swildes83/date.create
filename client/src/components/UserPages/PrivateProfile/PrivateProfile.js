import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import "./PrivateProfile.css";
import API from "../../../utils/API";
import Placeholder from "../Placeholder";

const userID = "5a8624f2fe9f971c5c565bb3";

class PrivateProfile extends Component {
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
                            <a href="/preferences">date(preferences)</a>
                        </li>
                        <li className="tab">
                            <a href="/requirements">date(requirements)</a>
                        </li>
                        <li className="tab">
                            <a href="/results">date(results)</a>
                        </li>
                        <li className="tab">
                            <a href="/potentials">date(potentials)</a>
                        </li>
                        <li className="tab">
                            <a href="/contacts">date(contacts)</a>
                        </li>
                    </ul>
                </div>
            </div>
        )


    }
}
export default PrivateProfile;