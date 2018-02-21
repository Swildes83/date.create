import React from "react";
import "./CreateUser.css";
//class CreateUser extends Component {
    //sayName

 //}
const CreateUser = (props) => (

    <div className="row">
    <div className="col s6">
        <a href="/1/profile" className="waves-effect waves-light indigo lighten-2 btn createuserbutton">create user</a>
    </div>
    <div className="col s6">
        <a href="/1/private" className="waves-effect waves-light indigo lighten-2 btn loginbutton">login</a>
    </div>
    </div>
);

export default CreateUser;