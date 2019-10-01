import React from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';

class UserCardData extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/Steverenner1/followers`)
            .then(res => this.setState(res))
    }

    render() {
        console.log(this.state.login)

        return (
            this.state.data.map(e => {
                return (
                    <Card>
                        <Image src={e.avatar_url} />
                        <Card.Content>
                            <Card.Header>
                                {e.login}
                            </Card.Header>
                            <Card.Content>{e.html_url}</Card.Content>
                        </Card.Content>
                    </Card>
                )
            })
        )
    }
}

export default UserCardData;