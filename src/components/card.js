import React from "react"

import {getState} from "./dish"
class Card extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={};
        this.changeQuantity=this.changeQuantity.bind(this);
    }
    changeQuantity(e)
    {
        var dish_id =this.props.dish.id;
        var quantity=parseInt(e.target.value);
        // var item_quantity_map={};
        // item_quantity_map[dish_id]=quantity;
        getState(this.props.dish.id,quantity)
    }
    render()
    {
        return(
            
                <div className="card" >
                    <img src={this.props.dish.image} width="100%" height="200" id={this.props.dish.id} onClick={(e)=>{window.location.href="/#/dishes/"+e.target.id}}/>   
                    <div className="desc">
                        <p>{this.props.dish.id}</p>
                        
                        <p>{this.props.dish.name}</p>
                        {this.props.person=="waiter" && 
                            (
                            <div>
                                <label>Quantity</label>
                                <input type="number" onChange={this.changeQuantity}></input>
                            </div>
                            )}
                    {/* <Link to={editlink}>Edit</Link>&nbsp;&nbsp;&nbsp; */}
                    {/* <a href="#" onClick={(e)=> {var result=confirm("Are you sure to delete?");if(result){e.preventDefault();this.props.handler(this.props.uid)}}}>Delete</a> */}
                    </div>
                </div>
            
            
        )
    }

    
}
export default Card;