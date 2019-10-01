import React from 'react';
import axios from 'axios';
import { Card, Image, Segment } from 'semantic-ui-react';
import UserCardData from './UserCardData';



const UserCard = props => {
    console.log(props)
    return (<Segment>
        <Card>
            <Image src={props.data.avatar_url} />
            <Card.Content>
                <Card.Header>
                    {props.data.login}
                </Card.Header>
            <Card.Meta>Following: {props.data.following}</Card.Meta>
            <h3>Followers:</h3>
            <UserCardData />
            </Card.Content>
         </Card>
         </Segment>
    )
}




export default UserCard;