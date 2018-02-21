import React, { Component } from "react";
import "./Results.css";
import API from "../../../utils/API";
import { Card, CardTitle, Row, Col } from "react-materialize";
import { Link } from "react-router-dom";

// hardcoding the user ID of Peter Griffin from mongo DB
// You will need to update this ID with the correct ID from your local mongoDb instance

//const userID = "5a8624f2fe9f971c5c565bb3";
const matchID = "5a88b703b2711d7990ee8016";

class Results extends Component {
    state = {
        result: [],
        search: ""
    };
    componentDidMount() {
        this.getBioData(matchID);
    };
    getBioData = (id) => {
        API.getUserData(id)
            .then(res =>
                this.setState({ result: res.data }),
        )
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div className="result-list">
                <Row>
                    <Col s={4}>
                        <Card className='small'
                            header={<CardTitle image='../assets/profile/lgriffin/profile.png'>{this.state.result.screenName}</CardTitle>}
                            actions={<Link to={`/public/${matchID}`}>Profile</Link>}>
                            {this.state.result.bioMantra}
                        </Card>
                    </Col>
                </Row>
            </div >
        )
    }
}
export default Results;