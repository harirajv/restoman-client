import React from "react"
import axios from "axios"
import Card from "./card"
import {withRouter} from "react-router-dom"

class Dishes extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={data:[],loading:false};
    }
    componentDidMount()
    {
        (async ()=>{
            const response= await axios.get("http://5e80572e0eb3ec0016e91059.mockapi.io/dishes/Dishes/");
            this.setState({data:response.data,loading:false})
        })();
        this.setState({loading:true})
    }
    render()
    {   var dishes= this.state.data.map((dish)=>{ return <Card dish={dish}/>});
        return(
            <div>
                {this.state.data.length!=0 && (<div>{dishes}</div>)}
            </div>
        )
    }
}
export default withRouter(Dishes);