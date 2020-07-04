import React from "react"


import config from "../config"
import axios from "axios"
import {withRouter} from "react-router-dom"
class LoginPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            email : "",
            password : "",
            is_valid : true
        }
       this.handleEmailChange = this.handleEmailChange.bind(this);
       this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount()
    {
        
    }
    async handleSubmit()
    {
        
        
            
        await axios({
            method  : 'POST',
            url     :   config.endpoints.login,
            data    :  { "email" : this.state.email, "password" : this.state.password}
        }).then(function(res){
            console.log("API call success")
            localStorage.setItem('auth_token', res.data.token)
            config.authorization.auth_token = res.data.token;
            console.log(config.authorization.auth_token)
            // console.log("completed");
            window.location.href = "/"
        }).catch(function(error){
            console.log("Api call failure")
            this.setState({is_valid : false})
        });
            
            
        
        // this.setState({loading:true})
               
    }

    handleEmailChange(e)
    {
        e.persist();
        this.setState({"email": e.target.value})
    }
    handlePasswordChange(e)
    {
        e.persist();
        this.setState({"password": e.target.value})
    }
    render()
    {
        
        return(
            <div>
                
                <h1>Login</h1>
                <div class="container">
                    <form onSubmit={this.handleSubmit}>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group xs-pt-10">
                                    <label>Email<span class="text-danger">*</span></label>
                                    <input type="text"  onChange={this.handleEmailChange} class="form-control" required=""></input>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group xs-pt-10">
                                    <label>Password<span class="text-danger">*</span></label>
                                    <input type="password"  onChange={this.handlePasswordChange} class="form-control" required=""></input>
                                </div>
                            </div>
                            {this.state.is_valid==false && (<div class="col-lg-12">
                                <span class="text-danger">Invalid Credentials</span>
                            </div>)}
                            <div class="col-lg-12">

                            </div>

                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <button type="submit" class="btn btn-primary">Submit</button> 
                            </div>
                        </div>
                    </form>
                    
                    
                </div>
            </div>
        )
    }
}
export default withRouter(LoginPage);