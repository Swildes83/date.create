import React, { Component } from "react";
import "./Contacts.css";
import { Row, Col } from "react-materialize";
// import "./BioData.css";
// import API from "../../utils/API";

// hardcoding the user ID of Peter Griffin from mongo DB
// You will need to update this ID with the correct ID from your local mongoDb instance

// const userID = "5a8624f2fe9f971c5c565bb3";

class Contacts extends Component {
    state = {
        result: [],
        search: ""
    };
    // componentDidMount() {
    //     this.getBioData(userID);
    // };
    // getBioData = (id) => {
    //     API.getUserData(id)
    //         .then(res =>
    //             this.setState({ result: res.data }),
    //     )
    //         .catch(err => console.log(err));
    // };
    render() {
        return (
            <div className="contact-list">
            <h4>date(contacts)</h4>
            {/* <h4>date(match.best):</h4> */}
<Row>
    <Col s={4}>
    <img id="travis" src= {'../assets/profile/tthompson/travis.jpg'} alt="Travis"/>
        {/* <Card className='small'
            header={<CardTitle image='../assets/profile/lgriffin/profile.png'>{this.state.result.screenName}</CardTitle>}
            actions={<Link to={"/"}>Profile</Link>}>
            {this.state.result.bioMantra}
        </Card> */}
        <br></br>
        <br></br>
        <a href="https://github.com/Travo100" class>PROFILE</a>
    </Col>
</Row>
</div >)


    }
}
export default Contacts;