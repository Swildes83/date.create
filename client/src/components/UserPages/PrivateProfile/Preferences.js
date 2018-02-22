import React, { Component } from "react";
import "./Preferences.css";
// import API from "../../utils/API";
import { Row, Input, Button, Icon } from "react-materialize";   
// hardcoding the user ID of Peter Griffin from mongo DB
// You will need to update this ID with the correct ID from your local mongoDb instance

// const userID = "5a8624f2fe9f971c5c565bb3";

class BioData extends Component {
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
            <div className="preferences-form">
            <h3>date(preferences)</h3>
            <p>Enter your favorite things, so your matches can get to know you!</p>
            <Row>
            <h4>date(preferences.mantra)</h4>
            <p>comma separated list</p>
                <Input
                    s={12}
                    placeholder="E.g: 'Live life to the fullest', 'If you can't handle me at my worst, you don't deserve my best'"
                    label='Mantra'>
                </Input>
            </Row>
            <Row>
            <h4>date(preferences.gaming)</h4>
            <p>comma separated list</p>
                <Input
                    s={12}
                    placeholder="E.g: 'Destiny 2','Injustice 2', PUBG, Overwatch,'Quake 2'"
                    label='Gaming'>
                </Input>
            </Row>
            <Row>
            <h4>date(preferences.music)</h4>
                <Input
                    s={12}
                    placeholder="E.g: 'Bob Marley','Queen', 'What So Not', 'Rick Astley'"
                    label='Music'>
                </Input>
            </Row>
            <Row>
            <h4>date(preferences.movies)</h4>
                <Input
                    placeholder="'E.g: 'Inception', 'Prometheus', 'In Bruges'"
                    s={12}
                    label='Movies'>
                </Input>
            </Row>
            <Row>
            <h4>date(preferences.tv)</h4>
                <Input
                    placeholder= "'E.g: 'Mad Men', 'True Detective', 'Family Guy'"
                    s={12}
                    label='TV Shows'>
                </Input>
                </Row>
                <Row>
            <h4>date(preferences.books)</h4>
                <Input
                    placeholder= "'E.g: '1984', 'The Holy Bible', 'Facebook',"
                    s={12}
                    label='books'>
                </Input>
                </Row>
            <Button className="red accent-1" waves='light'>save<Icon right>save</Icon></Button>
        </div >
        )
            // <div className="bioList">
            //     <ul><b>Mantra:</b>
            //         <li>{this.state.result.bioMantra}</li>
            //     </ul>
            //     <ul><b>Technology:</b>
            //         <li>{this.state.result.bioTechnology}</li>
            //     </ul>
            //     <ul><b>AFK Hobbies:</b>
            //         <li>{this.state.result.bioAFKHobbies}</li>
            //     </ul>
            //     <ul><b>Movies:</b>
            //         <li>{this.state.result.bioMovies}</li>
            //     </ul>
            //     <ul><b>TV:</b>
            //         <li>{this.state.result.bioTV}</li>
            //     </ul>
            //     <ul><b>Music:</b>
            //         <li>{this.state.result.bioMusic}</li>
            //     </ul>
            //     <ul><b>Currently Reading:</b>
            //         <li>{this.state.result.bioCurrentlyReading}</li>
            //     </ul>
            //     <ul><b>Currently Watching:</b>
            //         <li>{this.state.result.bioCurrentlyWatching}</li>
            //     </ul>
            //     <ul><b>Currently Listening To:</b>
            //         <li>{this.state.result.bioCurrentlyListening}</li>
            //     </ul>
            // </div >)


    }
}
export default BioData;