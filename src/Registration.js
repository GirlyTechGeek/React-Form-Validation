import React, { Component } from "react";

class Registration extends Component{
    constructor(props) {
        super(props);

        this.state = {
            firstname:"",
            email:"",
            errors:[],
        };
    }
    newError(key) {
        return this.state.errors.indexOf(key) !== -1; 
    }
    handleChange = (e) => {
        var key = e.target.name;
        var value = e.target.value;
        var obj = {};
        obj[key] = value;
        this.setState(obj);
    }      
    handleSubmit = (e) => {
        e.preventDefault();
        var errors = [];
        if (this.state.firstname === "") {
            errors.push("firstname");
        }
        const regExp = /\S+@\S+/;
        var validEmail = regExp.test(String(this.state.email).toLowerCase());
        if (!validEmail) {
            errors.push("email");
        }
        this.setState({
            errors: errors
        });

        if (errors.length > 0) {
            return false;
        } else {
            alert("sumbmit form!")
        } 
    }
    
    render(){
        return(
            <form className="container">
                <div>
                    <lable htmlFor="firstname" className="float-left">First Name</lable>
                    <input
                        autoComplete="off" placeholder="Enter a name"
                        className={ this.newError("firstname") ? "form-control is-invalid" : "form-control"}
                        name="firstname" value={this.state.firstname} onChange={this.handleChange}
                    />
                    <div 
                        className={this.newError("firstname") ? "inline-errormsg" : "hidden"}>
                        Please enter a value
                    </div>
                </div>
                <div>
                    <lable for="email" className="float-left">Email</lable>
                    <input
                        autoComplete="off" placeholder="Enter an email"
                        className={ this.newError("email") ? "form-control is-invalid" : "form-control"}
                        name="email" value={this.state.email} onChange={this.handleChange}
                    />
                    <div
                        className={this.newError("email") ? "inline-errormsg" : "hidden"}>
                        Email is either invalid or not input
                    </div>
                    <div className="col-lg-12 padd-top">
                        <button className="btn btn-primary" onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}


export default Registration