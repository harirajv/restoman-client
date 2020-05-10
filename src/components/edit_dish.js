import React from "react"

import NavBar from "./navbar"
class EditDish extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={}
    }
    handleSubmit()
    {
        console.log("Submitted")       
    }
    render()
    {
        return(
            <div>
                <NavBar/>
                <h1>Edit Page</h1>
                <div class="container">
                    <form onSubmit={this.handleSubmit}>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group xs-pt-10">
                                    <label>Dish Name<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" required=""></input>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group xs-pt-10">
                                    <label>Dish Description<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" required=""></input>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group xs-pt-10">
                                    <label>Dish Image<span class="text-danger">*</span></label>
                                    <input type="file" class="form-control" required=""></input>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <button type="submit" class="btn btn-primary pull-right">Submit</button> 
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        )
    }
}
export default EditDish