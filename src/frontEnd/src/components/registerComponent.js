import React, { Component } from 'react';
import axios from 'axios';

class logInComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPass: ''
        }
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirmPass: this.state.confirmPass
        };
        console.log("Request for log in with ", data);
        axios.post('http://localhost:5000/signup', data)
            .then(res => {
                console.log(res);
                if (res.data.response !== false && res.data.status !== 404) {
                    console.log("object", res);
                    /* const message = res.data.message;
                    swal({
                      text: message,
                      title: "Success",
                      icon: "success",
                      closeOnClickOutside: true,
                      timer: 3000
                    })
                    .then(() => {
                      this.props.history.push("/", true);
                    }); */
                  } 
                  else {
                    const message = res.data.message;
                    console.log(message);
                    /* swal({
                      text: message,
                      title: "Error",
                      icon: "error",
                      className: "red-bg",
                      closeOnClickOutside: true,
                      timer: 3000
                    }).then(() => {
                      this.props.history.push("/host");
                    }); */
                  }
            })
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="myform form ">
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Register</h1>
                                </div>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" 
                                            name="name"  
                                            placeholder="Enter name"
                                            className="form-control" 
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" 
                                            name="email"  
                                            placeholder="Enter email"
                                            className="form-control" 
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" 
                                            name="password" 
                                            placeholder="Enter password"
                                            className="form-control" 
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" 
                                            name="confirmPass" 
                                            placeholder="Enter password agai"
                                            className="form-control" 
                                            value={this.state.confirmPass}
                                            onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="col-md-12 text-center ">
                                <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>
            </div>  
        );
    }
}

export default logInComponent;
