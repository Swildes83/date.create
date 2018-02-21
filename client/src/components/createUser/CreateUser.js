import React from "react";
import "./CreateUser.css";
//class CreateUser extends Component {
    //sayName

// hardcoding the user ID of Peter Griffin from mongo DB
// You will need to update this ID with the correct ID from your local mongoDb instance

const userID = "5a8624f2fe9f971c5c565bb3";
const publicPath = "/" + userID;
const privatePath = '/Login';
//const privatePath = "/" + userID + "/private";

const CreateUser = (props) => (

    <div className="row">
    <div className="col s6">
    <a href={publicPath} className="waves-effect waves-light indigo lighten-2 btn createuserbutton">create new user</a>
    </div>
    <div className="col s6">
<<<<<<< HEAD
    <a href={privatePath} className="waves-effect waves-light red lighten-2 btn loginbutton">Login</a>
=======
    <a href={privatePath} className="waves-effect waves-light indigo lighten-2 btn loginbutton">login</a>
>>>>>>> bbb847dbc9d4ee2dfd085d7fd07ce14c572d0660
    </div>
    </div>
);

export default CreateUser;