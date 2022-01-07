import React from 'react';
import axios from 'axios';
import Card from './card';
import UserCard from "./user_card"
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import config from "../config"
import AuthService from '../services/auth.service';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false
        };
    }

    async componentDidMount() {
        this.setState({ isLoading:true });
        await axios.get(config.endpoints.users).then(response => this.setState({
            data: response.data,
            isLoading: false
        }));
    }

    render() {
        const users = this.state.data.map(user => <UserCard user={user} role={localStorage.getItem('role')}/>);
        return (

            <div>
                <NavBar/>
                {this.state.data.length !== 0 && (<div>{users}</div>)}
            </div>
        );
    }
}

export default withRouter(Users);