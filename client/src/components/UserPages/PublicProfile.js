import React, { Component } from "react";
import "./PublicProfile.css";
import API from "../../utils/API";

class PublicProfile extends Component {
    state = {
        result: [],
        search: ""
    };
    componentDidMount() {
        this.loadUserData("5a826338fe24662c0c4054dc");
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
            </div>)
    }
}
export default PublicProfile;
