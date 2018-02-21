import React from "react";
import "./CreateUser.css";

// hardcoding the user ID of Peter Griffin from mongo DB
// You will need to update this ID with the correct ID from your local mongoDb instance

const userID = "5a8624f2fe9f971c5c565bb3";
const publicPath = "/" + userID;
const privatePath = "/" + userID + "/private";

const CreateUser = (props) => (

    <div className="row">
    <div className="col s6">
    <a href={publicPath} className="waves-effect waves-light red lighten-2 btn createuserbutton">public profile</a>
    </div>
    <div className="col s6">
    <a href={privatePath} className="waves-effect waves-light red lighten-2 btn loginbutton">private profile</a>
    </div>
    </div>
);

export default CreateUser;