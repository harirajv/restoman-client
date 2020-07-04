import React from "react"
import NavBar from "./navbar";
import config from "../config"
import { Redirect } from "react-router-dom";
class Home extends React.Component {

    constructor(props)
    {
        super(props);
        this.state={};
    }
    componentDidMount()
    {
        console.log(config.authorization.auth_token)
        if(localStorage.getItem('auth_token'))
        {
            console.log("logged in user")
        }
        else
        {
            console.log("Not logged in ")
            window.location.href="/#/login"
        }
    }
    render()
    {
        return(
            <div>
                <NavBar/>
                <div class="container">
                    <div class="row">
                        <h3>Welcome to home page</h3>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
export default Home