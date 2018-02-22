import React, { Component } from 'react';
import "./Footer.css";
import pickuplines from "../../pickuplines.js"


class Footer extends Component {

    state = {
        pickupLines: pickuplines,
        selectedPickUpLine: ""
    }

    componentDidMount() {
        this.updateLine();
        setInterval(this.updateLine, 8000);
    }

    updateLine = () => {
        this.setState({
            selectedPickUpLine: this.printQuote()
        });
    }

    printQuote = () => {
        let randomId = this.getRandomLine(this.state.pickupLines);
        return this.state.pickupLines[randomId].pickupLine;
    }

    getRandomLine = (pickupLines) => Math.floor(Math.random() * pickupLines.length);

    render() {
        console.log(this.state.selectedPickUpLine);
        return (
            <footer>

                <section id="pickupLines" class="flow-text">
                    <h3>Can't think of anything to say?</h3>
                    <div className="lines">
                        "{this.state.selectedPickUpLine}"
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer;