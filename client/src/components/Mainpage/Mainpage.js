import React from "react";
import "./Mainpage.css";
import Header from '../Header';
import Footer from '../Footer';
import CreateUser from '../CreateUser/CreateUser.js';

const Mainpage = (props) => (
    <div className="bg">
    <Header/>
    <CreateUser/>
    <Footer/>
  </div>
);

export default Mainpage;