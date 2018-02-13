import React from "react";
import "./CreateUser.css";

const CreateUser = (props) => (

    <div className="row">
    <div className="col s6">
    <a className="waves-effect waves-light indigo lighten-2 btn createuserbutton">create new user</a>
    </div>
    <div className="col s6">
    <a className="waves-effect waves-light indigo lighten-2 btn loginbutton">login</a>
    </div>
    </div>
);

export default CreateUser;