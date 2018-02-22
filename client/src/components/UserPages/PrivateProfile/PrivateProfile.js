import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./PrivateProfile.css";
import API from "../../../utils/API";
import Placeholder from "../Placeholder";
import Preferences from "./Preferences";
import Requirements from "./Requirements";
import Results from "./Results";
import Potentials from "./Potentials";
import Contacts from "./Contacts";

// const userID = "5a88b703b2711d7990ee8013";

class PrivateProfile extends Component {
    state = {
        result: [],
        search: ""
    };
    componentDidMount() {
        const userID = this.props.match.params.id;
        this.loadUserData(userID);
    };
    loadUserData = (id) => {
        API.getUserData(id)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };
    render() {
        return (
            <HashRouter>
                <div className="card">
                    <div className="card-content bg-girl">
                        <img id="profileimage" src="../assets/profile/ChickenKiller/profile.png" alt="My profile"></img>
                        <p id="name">{this.state.result.screenName}</p>
                    </div>
                    <div className="card-tabs">
                        <ul className="tabs tabs-fixed-width">
                            <li className="tab">
                            <NavLink to="/preferences">date(preferences)</NavLink>
                            </li>
                            <li className="tab">
                                <NavLink to="/requirements">date(requirements)</NavLink>
                            </li>
                            <li className="tab">
                                <NavLink to="/results">date(results)</NavLink>
                            </li>
                            <li className="tab">
                            <NavLink to="/potentials">date(potentials)</NavLink>
                            </li>
                            <li className="tab">
                            <NavLink to="/contacts">date(contacts)</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="private-content">
                        <Route path="/" component={Placeholder} />
                        <Route path="/preferences" component={Preferences} />
                        <Route path="/requirements" component={Requirements} />
                        <Route path="/results" component={Results} />
                        <Route path="/potentials" component={Potentials} />
                        <Route path="/contacts" component={Contacts} />
                    </div>
                </div>
            </HashRouter>
        )
    }
}
export default PrivateProfile;