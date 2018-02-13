import React from "react";
import "./CreateUser.css";

const CreateUser = (props) => (

    <div className="row">
    <div className="col s6">
    <a className="waves-effect waves-light btn createuserbutton">create user</a>
    </div>
    <div className="col s6">
    <a className="waves-effect waves-light btn loginbutton">login</a>
    </div>
    </div>
);

export default CreateUser;