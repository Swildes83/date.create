import React, { Component } from "react";
import "./Potentials.css";
import { Row, Col } from "react-materialize";
// import API from "../../utils/API";
// import { Card, CardTitle, Row, Col } from "react-materialize";
// import { Link } from "react-router-dom";

// hardcoding the user ID of Peter Griffin from mongo DB
// You will need to update this ID with the correct ID from your local mongoDb instance

// const userID = "5a8624f2fe9f971c5c565bb3";

class Potentials extends Component {
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
            <div className="potentials-list">
                            <h3>date(potentials)</h3>
                            <h4>date(match.possible):</h4>
                <Row>
                    <Col s={4}>
                    <img id="potentialimage" src= {'../assets/profile/msimpson/marge.png'} alt="marge"/>
                        {/* <Card className='small'
                            header={<CardTitle image='../assets/profile/lgriffin/profile.png'>{this.state.result.screenName}</CardTitle>}
                            actions={<Link to={"/"}>Profile</Link>}>
                            {this.state.result.bioMantra}
                        </Card> */}
                        <br></br>
                        <br></br>
                        <a href="/" class>PROFILE</a>
                    </Col>
                    <Col s={4}>
                    <img id="potentialimage" src= {'../assets/profile/lbelcher/linda.png'} alt="linda"/>
                        {/* <Card className='small'
                            header={<CardTitle image='../assets/profile/lgriffin/profile.png'>{this.state.result.screenName}</CardTitle>}
                            actions={<Link to={"/"}>Profile</Link>}>
                            {this.state.result.bioMantra}
                        </Card> */}
                        <br></br>
                        <br></br>
                        <a href="/" class>PROFILE</a>
                    </Col>
                    <Col s={4}>
                    <img id="potentialimage" src= {'../assets/profile/fsmith/francine.png'} alt="francine"/>
                        {/* <Card className='small'
                            header={<CardTitle image='../assets/profile/lgriffin/profile.png'>{this.state.result.screenName}</CardTitle>}
                            actions={<Link to={"/"}>Profile</Link>}>
                            {this.state.result.bioMantra}
                        </Card> */}
                        <br></br>
                        <br></br>
                        <a href="/" class>PROFILE</a>
                    </Col>
                </Row>
            </div>
            )


    }
}
export default Potentials;