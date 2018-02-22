import React, { Component } from "react";
import "./Results.css";
import { Row, Col } from "react-materialize";
// import API from "../../../utils/API";
// import { Card, CardTitle, Row, Col } from "react-materialize";
// import { Link } from "react-router-dom";

// hardcoding the user ID of Peter Griffin from mongo DB
// You will need to update this ID with the correct ID from your local mongoDb instance

//const userID = "5a8624f2fe9f971c5c565bb3";
// const matchID = "5a88b703b2711d7990ee8016";

class Results extends Component {
    state = {
        result: [],
        search: ""
    };
    // componentDidMount() {
    //     this.getBioData(matchID);
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
            <div className="result-list">
                            <h3>date(results)</h3>
                            <h4>date(match.best):</h4>
                <Row>
                    <Col s={4}>
                    <img src= {'../assets/profile/lgriffin/profile.png'} alt="Lois"/>
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
            </div >
        )
    }
}
export default Results;
