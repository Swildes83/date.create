import React from "react";
// import "./ProfileCard.css";
import { Card, Icon } from 'semantic-ui-react';

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)
const ProfileCard = props => (
<Card
image='/assets/images/lois_griffin_profile.png'
header='Lois Griffin'
meta='Friend'
description='Lois is a housewife'
extra={extra}
/>
)

export default ProfileCard;