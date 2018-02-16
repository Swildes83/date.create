// import React, {Component} from "react";
// // import "./ProfileCard.css";
// // import { Card, Icon } from "semantic-ui-react";
// // /:id/search/city\=:locCity&state\=:locState&gender\=:gender
// import API from "../../utils/API";

// class ProfileCard extends Component {
//   state = {
//     result: [],
//     search: ""
//   };
//   componentDidMount() {
//     this.loadUserData();
//   };
//   loadUserData = () => {
//     API.findMatch("San Diego", "CA", "M")
//       .then(res => this.setState({ result: res.data[1] }))
//       .catch(err => console.log(err));
//   };
//   render() {
//     return (
//       <div>
//         {/* <p>Test</p>
//         <p>{this.state.result.screenName}</p>
//         <a>
//           <Icon name="user" />
//   </a>

//         < Card
//           image="/assets/images/lois_griffin_profile.png"
//           header={this.state.result.firstName}
//           meta="Friend"
//           description="Lois is a housewife"

//         /> */}
//       </div>
//     )
//   }
// }

//   export default ProfileCard;