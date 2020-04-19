import React from 'react';
import axios from 'axios';
import Card from './card';
import { withRouter } from 'react-router-dom';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false
        };
    }

    componentDidMount() {
        axios.get('/users')
            .then(res => {
                console.log('response = ', res);
                this.setState({ data: res.data.users, isLoading: false })
            });

        this.setState({ isLoading:true })
    }

    render() {
        const users = this.state.data.map(user => <Card dish={user}/>);
        return (
            <div>
                {this.state.data.length !== 0 && (<div>{users}</div>)}
            </div>
        );
    }
}

export default withRouter(Users);