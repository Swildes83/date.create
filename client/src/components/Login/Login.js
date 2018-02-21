import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import "./Login.css";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            screenName: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.screenName.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }
    render() {
        return (
            <div className="Login">
                <form onSubmit= {this.handleSubmit}>
                    <FormGroup controlId='screenName' bsSize="large">
                        <ControlLabel>Screen Name</ControlLabel>
                        <FormControl
                            autoFocus
                            type='screenName'
                            value={this.state.screenName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId='password' bsSize='large'>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type='password'
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type='submit'
                    >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}



// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state= {
//             username:'',
//             password:''
//         }
//     }
//     render() {
//         return (
//             <Row>
//                 <Input type='screenName' label='screenName' s={12}/>
//                 <Input type='password' label='password' s={12}/>
//             </Row>
                
               
            

//         )
//     }
// }



// const Login = (props) => (
//     <div className="row">
//     <div className="col s6">
//     <a className="waves-effect waves-light btn loginbutton">login</a>
//     </div>
//     </div>
// );

// export default Login;