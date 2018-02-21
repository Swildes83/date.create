import React from "react";
import "./Mainpage.css";
import Header from '../Header';
import CreateUser from '../createUser/CreateUser';

const Mainpage = (props) => (
    <div className="bg">
    <Header/>
    <CreateUser/>
 
  </div>
);

export default Mainpage;