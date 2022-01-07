import React from "react"
import NavBar from "./navbar";

class Home extends React.Component {
    render() {
        return(
            <div>
                <NavBar/>
                <div className="container">
                    <div className="row">
                        <h3>Welcome to home page</h3>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default Home
