import React from "react"


class Card extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={};
    }
    render()
    {
        return(
            
                <div className="card" >
                    <img src={this.props.dish.image} width="100%" height="200" id={this.props.dish.id} onClick={(e)=>{window.location.href="/#/dishes/"+e.target.id}}/>   
                    <div className="desc">
                    <p>{this.props.dish.id}</p>
                    
                    <p>{this.props.dish.name}</p>
                    {/* <Link to={editlink}>Edit</Link>&nbsp;&nbsp;&nbsp; */}
                    {/* <a href="#" onClick={(e)=> {var result=confirm("Are you sure to delete?");if(result){e.preventDefault();this.props.handler(this.props.uid)}}}>Delete</a> */}
                    </div>
                </div>
            
            
        )
    }

    
}
export default Card;