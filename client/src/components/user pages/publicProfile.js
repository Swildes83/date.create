import React from "react";
import "./publicProfile.css";

const publicProfile = props => (
    <div>
        <head>
            <title>Public Profile</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"></link>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
        </head>

            <body>
                <div class="card">
                    <div class="card-content">

                        <img id="profileimage" src="./profile.jpg"></img>
                            <p id="name"> Jaxin San Filippo  </p>                   
                    </div>
                        <div class="card-tabs">
                            <ul class="tabs tabs-fixed-width">
                                <li class="tab">
                                    <a href="#test4">Test 1</a>
                                </li>
                                <li class="tab">
                                    <a class="active" href="#test5">Test 2</a>
                                </li>
                                <li class="tab">
                                    <a href="#test6">Test 3</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </body>
    </div>
   );

   export default publicProfile;
