// import React, { Component } from "react";
// import API from "../../utils/API";

// class UtilPage extends Component {
//     state = {
//         result: [],
//         search: ""
//     };
//     componentDidMount() {
//         this.loadUserData("5a826338fe24662c0c4054dc");
//     };
//     loadUserData = (id) => {
//         API.getUserData(id)
//             .then(res => this.setState({ result: res.data }))
//             .catch(err => console.log(err));
//     };
//     render() {
//         return (
//             <div className="util-wrapper">
//                 <div className="util-header">
//                     <Header as="h1">Utility page</Header>
//                 </div>
//                 <div className="util-results">
//                     <List>
//                         <List.Item>
//                             <List.Icon name='key' />
//                             <List.Content>
//                                 <List.Header>Screen Name</List.Header>
//                                 <List.Description>{this.state.result.screenName}</List.Description>
//                             </List.Content>
//                         </List.Item>
//                         <List.Item>
//                             <List.Icon name='key' />
//                             <List.Content>
//                                 <List.Header>Preferred Tech</List.Header>
//                                 <List.Description>{this.state.result.bioTechnology}</List.Description>
//                             </List.Content>
//                         </List.Item>
//                         <List.Item>
//                             <List.Icon name='key' />
//                             <List.Content>
//                                 <List.Header>AFK Hobbies</List.Header>
//                                 <List.Description>{this.state.result.bioAFKHobbies}</List.Description>
//                             </List.Content>
//                         </List.Item>
//                     </List>
//                 </div>
//             </div>
//         )
//     }
// }

// export default UtilPage;