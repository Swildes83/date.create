import React from "react";
import "./contactQuiz.css";

const contactQuiz = (props) => (
    <div className="contactQuiz">
        {/* Modal Trigger */}
        <a className="waves-effect waves-light btn modal-trigger" href="#contactQuiz">Contact</a>

        {/* Modal Structure */}
        <div id="contactQuiz" className="modal modal-fixed-footer">
            <div className="modal-content">
                <h4>FizzBuzz!</h4>
                <h3>Write out your best FizzBuzz! Be creative!</h3>
                <textarea>// code goes here</textarea>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
            </div>
        </div>
    </div>
);

export default contactQuiz;