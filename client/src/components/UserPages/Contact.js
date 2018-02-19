import React from "react";
import {Button, Icon } from "react-materialize";
import "./Contact.css";

const Contact = () => (
    <div className="contact-quiz">
    <h5 className="red-text text-accent-1">FizzBuzz!</h5>
    <h6 className="red-text text-accent-1">Want to contact me?</h6>
    <textarea className="green-text text-darken-3" placeholder="Write out your best FizzBuzz, be creative!"></textarea>
    <Button className="red accent-1" waves='light'>Submit<Icon left>contacts</Icon></Button>
    </div>
)
export default Contact;