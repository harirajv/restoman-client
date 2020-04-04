import React from "react"
import axios from "axios"
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
            const response= await axios.get("endpoint");
            this.setState({data:response.data.data,loading:false})
        })();
        this.setState({loading:true})
    }
    render()
    {   var dishes= this.state.data.map((dish)=>{ return "card"});
        return(
            
            <div>
                
                {this.state.data.length!=0 && (<div>{dishes}</div>)}
            </div>
        )
    }
}
export default Dishes;