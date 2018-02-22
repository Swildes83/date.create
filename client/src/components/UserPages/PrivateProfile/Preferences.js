import React, { Component } from "react";
import "./Preferences.css";
import API from "../../utils/API";
import { Row, Col } from "react-materialize";

// hardcoding the user ID of Peter Griffin from mongo DB
// You will need to update this ID with the correct ID from your local mongoDb instance

const userID = "5a8624f2fe9f971c5c565bb3";

class BioData extends Component {
    state = {
        result: [],
        search: ""
    };
    componentDidMount() {
        this.getBioData(userID);
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
            <div className="bioList">
                <ul><b>Mantra:</b>
                    <li>{this.state.result.bioMantra}</li>
                </ul>
                <ul><b>Technology:</b>
                    <li>{this.state.result.bioTechnology}</li>
                </ul>
                <ul><b>AFK Hobbies:</b>
                    <li>{this.state.result.bioAFKHobbies}</li>
                </ul>
                <ul><b>Movies:</b>
                    <li>{this.state.result.bioMovies}</li>
                </ul>
                <ul><b>TV:</b>
                    <li>{this.state.result.bioTV}</li>
                </ul>
                <ul><b>Music:</b>
                    <li>{this.state.result.bioMusic}</li>
                </ul>
                <ul><b>Currently Reading:</b>
                    <li>{this.state.result.bioCurrentlyReading}</li>
                </ul>
                <ul><b>Currently Watching:</b>
                    <li>{this.state.result.bioCurrentlyWatching}</li>
                </ul>
                <ul><b>Currently Listening To:</b>
                    <li>{this.state.result.bioCurrentlyListening}</li>
                </ul>
            </div >)


    }
}
export default BioData;