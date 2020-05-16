import React from "react"
import axios from "axios"
import {withRouter} from "react-router-dom"
class DishDetails extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={loading:false,id:"",name:"",image:""}
    }
    componentDidMount()
    {
        
        
        (async () => {
            const response = await axios({
              url: "http://5e80572e0eb3ec0016e91059.mockapi.io/dishes/Dishes/"+this.props.match.params.dishId,
              method: 'get'
            })
            console.log(response.data)
            this.setState(
                {
                    id:response.data.id,
                    name:response.data.name,
                    image:response.data.image,
                    loading:false
                })
          })()
          this.setState({loading:true})
    }
    render()
    {
        console.log(this.props)
        return(
        <div><img src={this.state.image} width="100" height="100"/>
        <h1>{this.state.id}</h1>
        <h1>{this.state.name}</h1>
        </div>)
    }
}
export default withRouter(DishDetails);