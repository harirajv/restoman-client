import React from "react"
import { Link } from 'react-router-dom';
import AuthService from "../services/auth.service";

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.onLogOut = this.onLogOut.bind(this);
    }

    onLogOut(e) {
        e.preventDefault();
        AuthService.logout();
    }

    render() {
        return(
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="navbar-nav">
                    <Link to="/dishes" className="nav-item default-link nav-link text-info m-t-md">Dishes</Link>
                    <Link to="/new_order" className="nav-item default-link nav-link text-info">New Order</Link>
                    <Link to="/users" className="nav-item default-link nav-link text-info">Users</Link>
                    <Link to="/orders" className="nav-item default-link nav-link text-info">All orders</Link>
                    <Link to="#" onClick={this.onLogOut} className="nav-item default-link nav-link text-info">Logout</Link>
                </div>
            </nav>
            
        )
    }
}

export default NavBar
