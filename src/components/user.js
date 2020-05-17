import React from 'react';
import axios from 'axios';
import Card from './card';
import UserCard from "./user_card"
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import config from "../config"

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false
        };
    }

    componentDidMount()
    {
        (async ()=>{
            // const response = await axios.get("/dishes");
            // console.log(response)
            const response= await axios({
                method : 'GET',
                url:  config.endpoints.users,
                headers: {'Authorization':'Bearer '+config.authorization.auth_token}

            });
            this.setState({data:response.data,loading:false})
        })();
        this.setState({loading:true})
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