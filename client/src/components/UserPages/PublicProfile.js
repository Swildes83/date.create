import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import "./PublicProfile.css";
import API from "../../utils/API";
import BioData from "../BioData";
import Placeholder from "./Placeholder";
import Contact from "./Contact";

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
            <HashRouter>
            <div className="card">
                <div className="card-content">
                    <img id="profileimage" src="../assets/profile/ChickenKiller/profile.png" alt="My profile"></img>
                    <p id="name">{this.state.result.screenName}</p>
                </div>
                <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                        <li className="tab"><NavLink to="/5a8624f2fe9f971c5c565bb3/bio">BIO</NavLink>
                        </li>
                        <li className="tab"><NavLink to="/5a8624f2fe9f971c5c565bb3/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="public-Content">
                <Route path="/" component={Placeholder}/>
                <Route path="/:id/bio" component={BioData}/>
                <Route path="/:id/contact" component={Contact}/>
                </div>
            </div>
            </HashRouter>
            )
    }
}
export default publicProfile;
