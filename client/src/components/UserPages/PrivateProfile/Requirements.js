import React, { Component } from "react";
import "./Requirements.css";
// import API from "../../../utils/API";
import { Row, Input, Button, Icon } from "react-materialize";

class Requirements extends Component {
    state = {
        result: [],
        search: ""
    };
    render() {
        return (
            <div className="requirement-form">
                <h3>date(requirements)</h3>
                <p>Enter your requirements for your perfect match</p>
                <Row>
                    <h4>date(requirements.gender)</h4>
                    <Input
                        type='select'
                        s={12}
                        label='Gender'>
                        <option value='F'>Female</option>
                        <option value='M'>Male</option>
                        <option value='NS'>Not Specified</option>
                    </Input>
                </Row>
                <Row>
                <h4>date(requirements.technology)</h4>
                <p>comma separated list</p>
                    <Input
                        s={12}
                        placeholder="E.g: JavaScript,CSS,HTML5,'Web Development'"
                        label='Technology'>
                    </Input>
                </Row>
                {/* <Row>
                <h4>date(requirements.gaming)</h4>
                <p>comma separated list</p>
                    <Input
                        s={12}
                        placeholder="E.g: 'Destiny 2','Injustice 2',PUBG,Overwatch,'Quake 2'"
                        label='Gaming'>
                    </Input>
                </Row> */}
                <Row>
                <h4>date(requirements.location(city))</h4>
                    <Input
                        s={12}
                        placeholder="E.g: 'San Diego','Los Angeles',Springfield,Quahog"
                        label='City'>
                    </Input>
                </Row>
                <Row>
                <h4>date(requirements.location(state))</h4>
                    <Input
                        type='select'
                        s={12}
                        label='State'>
                        <option value='CAS'>Choose a state</option>
                        <option value='AL'>Alabama</option>
                        <option value='AK'>Alaska</option>
                        <option value='AS'>American Samoa</option>
                        <option value='AZ'>Arizona</option>
                        <option value='AR'>Arkansas</option>
                        <option value='CA'>California</option>
                        <option value='CO'>Colorado</option>
                        <option value='DC'>District of Columbia</option>
                        <option value='DE'>Delaware</option>
                        <option value='FL'>Florida</option>
                        <option value='GA'>Georgia</option>
                        <option value='GU'>Guam</option>
                        <option value='HI'>Hawaii</option>
                        <option value='ID'>Idaho</option>
                        <option value='IL'>Illinois</option>
                        <option value='IN'>Indiana</option>
                        <option value='IA'>Iowa</option>
                        <option value='KS'>Kansas</option>
                        <option value='KY'>Kentucky</option>
                        <option value='LA'>Louisiana</option>
                        <option value='ME'>Maine</option>
                        <option value='MD'>Maryland</option>
                        <option value='MA'>Massachusetts</option>
                        <option value='MI'>Michigan</option>
                        <option value='MN'>Minnesota</option>
                        <option value='MS'>Mississippi</option>
                        <option value='MO'>Missouri</option>
                        <option value='MT'>Montana</option>
                        <option value='NE'>Nebraska</option>
                        <option value='NV'>Nevada</option>
                        <option value='NH'>New Hampshire</option>
                        <option value='NJ'>New Jersey</option>
                        <option value='NM'>New Mexico</option>
                        <option value='NY'>New York</option>
                        <option value='NC'>North Carolina</option>
                        <option value='MP'>North Marianas Islands</option>
                        <option value='ND'>North Dakota</option>
                        <option value='OH'>Ohio</option>
                        <option value='OK'>Oklahoma</option>
                        <option value='OR'>Oregon</option>
                        <option value='PA'>Pennsylvania</option>
                        <option value='PR'>Puerto Rico</option>
                        <option value='RI'>Rhode Island</option>
                        <option value='SC'>South Carolina</option>
                        <option value='SD'>South Dakota</option>
                        <option value='TN'>Tennessee</option>
                        <option value='TX'>Texas</option>
                        <option value='UT'>Utah</option>
                        <option value='VT'>Vermont</option>
                        <option value='VA'>Virginia</option>
                        <option value='VI'>Virgin Islands</option>
                        <option value='WA'>Washington</option>
                        <option value='WV'>West Virginia</option>
                        <option value='WI'>Wisconsin</option>
                        <option value='WY'>Wyoming</option>
                    </Input>
                </Row>
                <Row>
                <h4>date(requirements.age(min))</h4>
                    <Input
                        placeholder='Enter a minimum age:'
                        s={12}
                        label='Minimum Age'>
                    </Input>
                </Row>
                <Row>
                <h4>date(requirements.age(max))</h4>
                    <Input
                        placeholder='Enter a maximum age:'
                        s={12}
                        label='Maximum Age'>
                    </Input>
                    </Row>
                <Row>
                <h4>date(requirements.hobbies(AFK))</h4>
                    <Input
                        s={12}
                        placeholder="E.g: Hiking,Camping,Skiing,ComicCon"
                        label='Hobbies'>
                    </Input>
                </Row>
                <Button className="red accent-1" waves='light'>save<Icon right>save</Icon></Button>
            </div >
        )
    }
}
export default Requirements;