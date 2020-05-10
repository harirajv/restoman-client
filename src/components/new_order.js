import React from "react"
import axios from "axios"
import Card from "./card"
import {withRouter} from "react-router-dom"

import NavBar from "./navbar";

function getState(dishId,quantity)
{
    var existing_order=this.state.order;
    
    existing_order[dishId]=parseInt(quantity);
    
    this.setState((prevState)=>{ return {order:existing_order}});
    // console.log(order)
}
export {getState};
class NewOrder extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={data:[],loading:false,order:{}};
        this.handleSave=this.handleSave.bind(this);
        getState=getState.bind(this);
    }
    componentDidMount()
    {
        (async ()=>{
            // const response = await axios.get("/dishes");
            // console.log(response)
            const response= await axios.get("http://5e80572e0eb3ec0016e91059.mockapi.io/dishes/Dishes/");
            this.setState({data:response.data,loading:false})
        })();
        this.setState({loading:true})
    }
    handleSave()
    {
        console.log(this.state)
    }
    render()
    {   var dishes= this.state.data.map((dish)=>{ return <Card dish={dish} option="order" role={localStorage.getItem('role')}/>});
        var order_summary=this.state.data.map((dish)=>{ if(dish.id in this.state.order) return <div><li>{dish.name}={this.state.order[dish.id]}</li></div>});
        
        return(
            <div>
                <NavBar/>
                <div class="row">
                    <div class="col-lg-12 text-right">
                        <span class="m-r-xs">Pages
                            <input class="form-control" style={{width:"70px",display: "inline"}}  type="number" min="1"/> of Total Pages
                        </span>
                        <div class="btn-group">
                            <button class="btn"><i class="fa fa-chevron-left"></i></button>
                            <button class="btn"><i class="fa fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
                {this.state.data.length!=0 && (<div>{dishes}</div>)}
                {/* have this button only for waiter */}
                <button onClick={this.handleSave}>Save Order</button>
                <div class="pull right">
                    <ul>{order_summary}</ul>
                </div>
            </div>
        )
    }
}
export {NewOrder};