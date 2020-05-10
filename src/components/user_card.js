import React from "react"
class UserCard extends React.Component
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
                    <img src={this.props.user.image} width="100%" height="200" id={this.props.user.id} onClick={(e)=>{window.location.href="/#/users/"+e.target.id}}/>   
                    <div className="desc">
                        <p>{this.props.user.id}</p>
                        
                        <p>{this.props.user.name}</p>
                        
                        {(this.props.role=="chef" || this.props.role=='waiter') && this.props.user.id==localStorage.getItem('id') && 
                            (
                            <div>
                                <button onClick={this.handleEditUser}>Edit</button>
                            </div>
                            )
                        }
                        {this.props.role=="admin" && 
                            (
                            <div>
                                <button onClick={this.handleActivateUser}>Activate/Deactivate</button>
                                <button onClick={this.handleEditUser}>Edit User</button>
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
export default UserCard;