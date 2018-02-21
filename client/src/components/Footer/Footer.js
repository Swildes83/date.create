import React, { Component } from 'react';
import "./Footer.css";
import { Toast } from 'react-materialize'
// import pickupLines from ''

class Footer extends Component {

    state = {
        pickupLines: ["pick up line one", "pick up line two", "pick up line three"],
        selectedPickUpLine: "Test Line"
    }
    
    componentDidMount() {
            this.setState({
                selectedPickUpLine: this.printQuote()
            });
    }

    printQuote = () => {
        let randomId = this.getRandomLine(this.state.pickupLines);
        return this.state.pickupLines[randomId];
    }

    getRandomLine = (pickupLines) => Math.floor(Math.random() * pickupLines.length);

    render() {
        return (
            <footer>
                <Toast toast={this.state.selectedPickUpLine}>
                    Generate pickup lines
                </Toast>
            </footer>
        )
    }
}

    export default Footer;