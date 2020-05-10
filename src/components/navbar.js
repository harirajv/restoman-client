import React from "react"
class NavBar extends React.Component {

    constructor(props)
    {
        super(props);
        this.state={};
    }
    render()
    {
        return(
            <nav class="navbar navbar-expand navbar-light bg-light">
                <div class="navbar-nav">
                    <a href="" class="nav-item default-link nav-link text-info m-t-md">Dishes</a>
                    <a href="" class="nav-item default-link nav-link text-info">New Order</a>
                    <a href="" class="nav-item default-link nav-link text-info">Users</a>
                    <a href="" class="nav-item default-link nav-link text-info">All orders</a>
                </div>
            </nav>
            
        )
    }
}
export default NavBar