import React from "react"
import NavBar from "./navbar";

class Orders extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={}
    }
    render()
    {
        return(
            <div>
                <NavBar/>
                <div class="row">
                    <div class="col-lg-12">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                {localStorage.getItem('role')=='admin' && (<th>Order taken by</th>)}
                                <th>Order Details</th>
                                <th>Created At</th>
                                <th>Completed At</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>123</td>
                                {localStorage.getItem('role')=='admin' && (<td>user_123</td>)}
                                <td>Dosa (1)</td>
                                <td>12/03/2020 12:00 PM</td>
                                <td>12/03/2020 13:00 PM</td>

                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Orders;