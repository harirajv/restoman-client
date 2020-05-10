import React from "react"
import NavBar from "./navbar";
class Home extends React.Component {

    constructor(props)
    {
        super(props);
        this.state={};
    }
    render()
    {
        return(
            <div>
                <NavBar/>
                <div class="container">
                    <div class="row">
                        <h3>Welcome to home page</h3>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
export default Home