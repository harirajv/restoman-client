import React from "react"

import {getState} from "./new_order"
import axios from "axios"
import config from "../config"
class Card extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={};
        this.changeQuantity=this.changeQuantity.bind(this);
        this.handleEditDish = this.handleEditDish.bind(this);
        this.handleActivateDish = this.handleActivateDish.bind(this)
    }
    changeQuantity(e)
    {
        var dish_id =this.props.dish.id;
        var quantity=parseInt(e.target.value);
        // var item_quantity_map={};
        // item_quantity_map[dish_id]=quantity;
        getState(this.props.dish.id,quantity)
    }
    handleEditDish()
    {
        window.location.href="/#/edit_dish/"+this.props.dish.id;
    }
    handleActivateDish()
    {
        var message="";
        if(this.props.dish.is_active==true)
        {
            message="Are you sure you want to deactivate the dish";
        }
        else if(this.props.dish.is_active==false)
        {
            message="Are you sure you want to activate the dish";
        }
        
        if (window.confirm(message)) {
            
            (async ()=>{
            
                const response = await axios({
                    method: 'PUT',
                    url:config.endpoints.dishes+"/"+this.props.dish.id,
                    data : {is_active: !this.props.dish.is_active},
                    headers: {'Authorization':'Bearer '+config.authorization.auth_token}
                })
                
                this.setState({data:response.data,loading:false})
            })();
          } else {
            console.log("You pressed Cancel!");
          }

    }
    render()
    {
        
        return(
            
                <div className="card" >
                    <img src={this.props.dish.image} width="100%" height="200" id={this.props.dish.id} onClick={(e)=>{window.location.href="/#/dishes/"+e.target.id}}/>   
                    <div className="desc">
                        <p>{this.props.dish.id}</p>
                        
                        <p>{this.props.dish.name}</p>
                        {this.props.option=='order' && 
                            (
                            <div>
                                <label>Quantity</label>
                                <input type="number" onChange={this.changeQuantity}></input>
                            </div>
                            )}
                        
                        {this.props.role=="chef" && this.props.option=="view" && 
                            (
                            <div>
                                <button onClick={this.handleActivateDish}>Activate/Deactivate</button>
                            </div>
                            )
                        }
                        {this.props.role=="admin" && this.props.option=="view" && 
                            (
                            <div>
                                {this.props.dish.is_active==true && (<button onClick={this.handleActivateDish}>Deactivate</button>)}
                                {this.props.dish.is_active==false && (<button onClick={this.handleActivateDish}>Activate</button>)}
                                
                                <button onClick={this.handleEditDish}>Edit Dish</button>
                            </div>
                            )
                        }
                        
                    {/* <Link to={editlink}>Edit</Link>&nbsp;&nbsp;&nbsp; */}
                    {/* <a href="#" onClick={(e)=> {var result=confirm("Are you sure to delete?");if(result){e.preventDefault();this.props.handler(this.props.uid)}}}>Delete</a> */}
                    </div>
                </div>
            
            
        )
    }

    
}
export default Card;