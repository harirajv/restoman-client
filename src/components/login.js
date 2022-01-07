import React from "react"
import {withRouter} from "react-router-dom"
import AuthService from '../services/auth.service';

class LoginPage extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false, errors: null };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event)
    {
        event.preventDefault();
        const { email, password } = event.target.elements;
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email.value.toLowerCase().match(emailRegex)) {
            AuthService.login(email.value, password.value)
            .then(() => {
                this.setState({ isLoggedIn: true });
                window.location.reload();
            }).catch((err) => this.setState({ errors: err.response.data.errors }));
        } else {
            this.setState({ errors: ['Please enter a valid email address'] });
        }
    }

    render() {
        // if(this.state.isLoggedIn) {
        //     return (<Redirect push to="/" />);
        // }

        return(
            <div>                
                <h1>Login</h1>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        {this.state.errors && (
                            <ul style={{listStyle: "none"}}>
                                {this.state.errors.map(msg => (
                                    <li className="text-danger" key={msg}>{msg}</li>
                                ))}
                            </ul>
                        )}

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group xs-pt-10">
                                    <label>Email<span className="text-danger">*</span></label>
                                    <input type="text" name="email" className="form-control" required></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group xs-pt-10">
                                    <label>Password<span className="text-danger">*</span></label>
                                    <input type="password" name="password" className="form-control" required></input>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <button type="submit" className="btn btn-primary">Submit</button> 
                            </div>
                        </div>
                    </form>                    
                </div>
            </div>
        )
    }
}

export default withRouter(LoginPage);
