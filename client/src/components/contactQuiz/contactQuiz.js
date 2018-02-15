import React from "react";
import ContactQuizModal from "./contactQuizModal";
import "./contactQuiz.css";
import { Button, Card, Row, Col, Icon } from 'react-materialize';


const ContactQuiz = () => (
    <div className="contactQuizWrapper">
        <Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
        <ContactQuizModal />
    </div>
);

export default ContactQuiz;