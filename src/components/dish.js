import React from "react"
import axios from "axios"
import Card from "./card"
import {withRouter} from "react-router-dom"
import config from "../config"
import NavBar from "./navbar";
import lodash from "lodash"
// function getState(dishId,quantity)
// {
//     var existing_order=this.state.order;
    
//     existing_order[dishId]=parseInt(quantity);
    
//     this.setState((prevState)=>{ return {order:existing_order}});
//     // console.log(order)
// }
// export {getState};
class Dishes extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={data:[],loading:false,order:{}, current_page:1};
        this.handleSave=this.handleSave.bind(this);
        // getState=getState.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handlePrevPage = this.handlePrevPage.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.pagechange = this.pagechange.bind(this)
        this.delayedCallback = lodash.debounce(this.pagechange,1000);
        
    }
    componentDidMount()
    {
        (async ()=>{
            
            const response = await axios({
                method: 'GET',
                url:config.endpoints.dishes,
                params : {'per_page':1},
                headers: {'Authorization':'Bearer '+config.authorization.auth_token}
            })
            console.log(response.headers)
            this.setState({data:response.data,loading:false, current_page:response.headers['page'], total_pages:response.headers['total-pages']})
        })();
        this.setState({loading:true})
    }
    handleSave()
    {
        console.log(this.state)
    }
    handleChangePage(e)
    {
        e.persist();
        this.setState({current_page:e.target.value});
        this.delayedCallback(e);
        
        
    }
    pagechange(e)
    {
        var page= parseInt(e.target.value);
        
        if(!page || page < 1 || page > this.state.total_pages)
        {

            this.setState({current_page:page});
        }
        else
        {

            (async ()=>{
        
                const response = await axios({
                    method: 'GET',
                    url:config.endpoints.dishes,
                    params : {'per_page':1, 'page':e.target.value},
                    headers: {'Authorization':'Bearer '+config.authorization.auth_token}
                })
                
                this.setState({data:response.data,loading:false, current_page:response.headers['page'], total_pages:response.headers['total-pages']})
            })();
        }
            
       
    }
    
        
  
    handleNextPage()
    {
        var current_page=this.state.current_page;
        (async ()=>{
            
            const response = await axios({
                method: 'GET',
                url:config.endpoints.dishes,
                params : {'per_page':1, 'page':parseInt(current_page)+1},
                headers: {'Authorization':'Bearer '+config.authorization.auth_token}
            })
            console.log(response.headers)
            this.setState({data:response.data,loading:false, current_page:response.headers['page'], total_pages:response.headers['total-pages']})
        })();
        
    }
    handlePrevPage()
    {
        var current_page=this.state.current_page;
        (async ()=>{
            
            const response = await axios({
                method: 'GET',
                url:config.endpoints.dishes,
                params : {'per_page':1, 'page':parseInt(current_page)-1},
                headers: {'Authorization':'Bearer '+config.authorization.auth_token}
            })
            console.log(response.headers)
            this.setState({data:response.data,loading:false, current_page:response.headers['page'], total_pages:response.headers['total-pages']})
        })();
        
    }
    render()
    {   
        
        var dishes= this.state.data.map((dish)=>{ return <Card dish={dish} option="view" role={localStorage.getItem('role')}/>});
        var order_summary=this.state.data.map((dish)=>{ if(dish.id in this.state.order) return <div><li>{dish.name}={this.state.order[dish.id]}</li></div>});
        
        return(
            <div>
                <NavBar/>
                <div class="row">
                    <div class="col-lg-12 text-right">
                        <span class="m-r-xs">Pages
                            <input class="form-control" value={this.state.current_page} style={{width:"70px",display: "inline"}}  type="number" onChange={this.handleChangePage}/> of {this.state.total_pages}
                        </span>
                        <div class="btn-group">
                            <button onClick={this.handlePrevPage} disabled={this.state.current_page==1} class="btn"><i class="fa fa-chevron-left"></i></button>
                            <button onClick={this.handleNextPage} disabled={this.state.current_page==this.state.total_pages} class="btn"><i class="fa fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
                {this.state.data.length!=0 && (<div>{dishes}</div>)}
                {/* have this button only for waiter */}
                {/* <button onClick={this.handleSave}>Save Order</button>
                <div class="pull right">
                    <ul>{order_summary}</ul>
                </div> */}
            </div>
        )
    }
}
export {Dishes};