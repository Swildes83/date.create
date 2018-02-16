import React from "react";
import "./Mainpage.css";
import Header from '../Header';
import CreateUser from '../CreateUser/CreateUser';
// import ContactQuiz from '../ContactQuiz/ContactQuiz';
// import Login from './Login';
// import Quiz from './Quiz';

const Mainpage = (props) => (
    <div className="bg">
    <Header/>
    <CreateUser/>
    {/* <Quiz/> */}
  </div>
);

export default Mainpage;