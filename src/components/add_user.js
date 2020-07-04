import React from "react"


import config from "../config"
import axios from "axios"
import {withRouter} from "react-router-dom"
class AddUser extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name : "",
            email : "",
            password : "",
            re_password : "",
            role:"",
            is_valid : true
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
       this.handleEmailChange = this.handleEmailChange.bind(this);
       this.handlePasswordChange = this.handlePasswordChange.bind(this);
       this.handleRePasswordChange = this.handleRePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount()
    {
        
    }
    async handleSubmit()
    {
        
        
            
        await axios({
            method  : 'POST',
            url     :   config.endpoints.users,
            headers : {'Authorization' : "Bearer "+ localStorage.getItem('auth_token')},
            data    :  { "name" : this.state.name, "role": this.state.role,"email" : this.state.email, "password" : this.state.password, "password_confirmation" : this.state.re_password}
        }).then(function(res){
            console.log("API call success")
            
            
            // console.log("completed");
            window.location.href = "/"
        }).catch(function(error){
            console.log("Api call failure")
            
        });
            
            
        
        // this.setState({loading:true})
               
    }
    handleNameChange(e)
    {
        e.persist();
        this.setState({"name": e.target.value})
    }
    handleRoleChange(e)
    {
        e.persist();
        this.setState({"role": e.target.value})
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
    handleRePasswordChange(e)
    {
        e.persist();
        this.setState({"re_password": e.target.value})
    }
    render()
    {
        
        return(
            <div>
                
                <h1>Login</h1>
                <div class="container">
                    <form onSubmit={this.handleSubmit}>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group xs-pt-10">
                                    <label>Name<span class="text-danger">*</span></label>
                                    <input type="text"  onChange={this.handleNameChange} class="form-control" required=""></input>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group xs-pt-10">
                                    <label>Role<span class="text-danger">*</span></label>
                                    <select class="form-control" onChange={this.handleRoleChange}>
                                        <option value="">Choose a role</option>
                                        <option value="admin">Admin</option>
                                        <option value="waiter">Waiter</option>
                                        <option value="chef">Chef</option>
                                        
                                    </select>
                                </div>
                            </div>
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
                            <div class="col-lg-12">
                                <div class="form-group xs-pt-10">
                                    <label>Re-Enter Password<span class="text-danger">*</span></label>
                                    <input type="password"  onChange={this.handleRePasswordChange} class="form-control" required=""></input>
                                </div>
                            </div>
                            {this.state.is_valid==false && (<div class="col-lg-12">
                                <span class="text-danger">Invalid Credentials</span>
                            </div>)}
                            

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
export default withRouter(AddUser);