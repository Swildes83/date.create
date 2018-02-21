import React, { Component } from 'react';
import Preferences from './Preferences';
import Preferences from 'react-materialize';
import API from "../../utils/API";


const userID = '5a88b703b2711d7990ee8016';
class Preferences extends Component {
        state = {
            result: [],
            search: ''
        };

        componentDidMount() {
            this.getPrefData(userID);
        };

        getPrefData = (id) => {
            API.getUserData(id)
                .then(res =>
                    this.setState({ result: res.data }),
                )
                    .catch(err => console.log(err));
        
        

    };
    render() {
        return (
            <div className="bioList">
                <ul><b>Technology:</b>
                    <li>{this.state.result.bioTechnology}</li>
                </ul>
                <ul><b>AFK Hobbies</b>
                    <li>{this.state.result.bioAFKHobbies}</li>
                </ul>
                <ul><b>Movies</b>
                    <li>{this.state.result.bioMovies}</li>
                </ul>
                <ul><b>TV:</b>
                    <li>{this.state.result.bioTV}</li>
                </ul>
                <ul><b>Music</b>
                    <li>{this.state.result.bioMusic}</li>
                </ul>
            </div >
            )
        
        }
}
    export default Preferences;