import React from "react"

import NavBar from "./navbar"
import config from "../config"
import axios from "axios"
import {withRouter} from "react-router-dom"
class EditDish extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            data:{
            "name":"",
            "description":""
        }
        };
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleDescriptionChange=this.handleDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount()
    {
        
        (async ()=>{
            
            const response = await axios({
                method: 'GET',
                url:config.endpoints.dishes+"/"+this.props.match.params.dishId,
                headers: {'Authorization':'Bearer '+config.authorization.auth_token}
            })
            
            this.setState({data:response.data,loading:false})
        })();
        this.setState({loading:true})
    }
    handleSubmit()
    {
        (async ()=>{
            
            const response = await axios({
                method: 'PUT',
                url:config.endpoints.dishes+"/"+this.props.match.params.dishId,
                headers: {'Authorization':'Bearer '+config.authorization.auth_token},
                data: {
                    "name": this.state.data.name,
                    "description": this.state.data.description
                }
            })
            
            window.location.href="/#/dishes"
        })();
        this.setState({loading:true})
               
    }
    handleNameChange(e)
    {
        var data = this.state.data;
        data['name']=e.target.value;
        
        this.setState({data: data})
    }
    handleDescriptionChange(e)
    {
        var data = this.state.data;
        data['description']=e.target.value;
        
        this.setState({data: data})
    }

    render()
    {
        console.log(this.props)
        return(
            <div>
                <NavBar/>
                <h1>Edit Page</h1>
                <div class="container">
                    
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group xs-pt-10">
                                <label>Dish Name<span class="text-danger">*</span></label>
                                <input type="text" value={this.state.data.name} onChange={this.handleNameChange} class="form-control"></input>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group xs-pt-10">
                                <label>Dish Description<span class="text-danger">*</span></label>
                                <textarea rows="5" value={this.state.data.description} onChange={this.handleDescriptionChange} type="text" class="form-control" required=""></textarea>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group xs-pt-10">
                                <label>Dish Image</label>
                                <input type="file" class="form-control"></input>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <button type="button" onClick={this.handleSubmit} disabled={this.state.name=="" || this.state.description==""} class="btn btn-primary pull-right">Submit</button> 
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
export default withRouter(EditDish);