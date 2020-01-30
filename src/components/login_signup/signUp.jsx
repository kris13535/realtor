import React from 'react';
import {withRouter} from 'react-router-dom';

import validate, {field} from './validator';
import InputErrors from './inputErrors';
import "../../css/login_signupCss/login_signupCSS.css"
import api from "../../server_api/api";

class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name: field({name: 'firstName', isRequired:true, minLength: 2}),
            last_name: field({name: 'lastName',isRequired: true, minLength: 2}),
            email: field({name: 'email', required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/}),
            password: field({name: 'password', isRequired:true, minLength: 6}),
            phone: field({name: 'phone', isRequired:true}),
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({target:{name,value}}){
        const errors = validate(name, value, this.state[name].validations);

        this.setState({
            [name]: {
                ...this.state[name],
                value,
                errors
            }
        });
    }

    handleSubmit = (event)=> {
        event.preventDefault();
        let isOK = true;
        for(let prop in this.state){
            const field = this.state[prop];
            const errors = validate(prop, field.value, field.validations);
            if(errors.length){
                isOK = false;
                this.setState({
                    [prop]: {
                        ...this.state[prop],
                        errors
                    }
                });
            }
        }

        if(isOK){
            const result = {};
            for(let prop in this.state){
                result[prop] = this.state[prop].value;
            }
            api.SignupUser(result)
                .then(res => {
                    console.log(res);
                    this.props.signUpHandelClick();
                    this.props.setUser();
                    this.props.history.push('/');
                    this.props.loginHandelClick();

                })
        }
    };

    render() {
        return (
            <div class="container" onClick={ this.props.handleChildClick()}>
                <div class="row">
                    <div class="col-md-5 mx-auto">
                        <div class="myform form ">
                            <div class="logo mb-3">
                                <div class="col-md-12 text-center">
                                    <h1 className={"head_line"}>Sign up</h1>
                                </div>
                            </div>
                            <form action="#" name="registration" onSubmit={this.handleSubmit}>
                                <div className="form-group d-flex input_div">
                                    <label className={"input_label"} for="exampleInputEmail1">First Name</label>
                                    <input type="text"  name="first_name"
                                           className="form_input" id="firstname" aria-describedby="emailHelp"
                                           placeholder="Enter first name" onBlur={this.handleChange}/>
                                </div>
                                <div className={"error"}><InputErrors errors={this.state.first_name.errors}></InputErrors></div>

                                <div className="form-group d-flex input_div">
                                    <label className={"input_label"} for="exampleInputEmail1">Last Name</label>
                                    <input type="text"  name="last_name"
                                           className="form_input" id="lastname" aria-describedby="emailHelp"
                                           placeholder="Enter last name" onBlur={this.handleChange} />
                                </div>
                                <div className={"error"}><InputErrors errors={this.state.last_name.errors}></InputErrors></div>

                                <div className="form-group d-flex input_div">
                                    <label className={"input_label"} for="exampleInputEmail1">Email address</label>
                                    <input type="email" name="email"
                                           className="form_input" id="email" aria-describedby="emailHelp"
                                           placeholder="Enter email" onBlur={this.handleChange} />
                                </div>
                                <div className={"error"}><InputErrors errors={this.state.email.errors}></InputErrors></div>

                                <div className="form-group d-flex input_div">
                                    <label className={"input_label"} for="exampleInputEmail1">Password</label>
                                    <input type="password" name="password" id="password"
                                           className="form_input" aria-describedby="emailHelp"
                                           placeholder="Enter password" onBlur={this.handleChange} />
                                </div>
                                <div className={"error"}><InputErrors errors={this.state.password.errors}></InputErrors></div>

                                <div className="form-group d-flex input_div">
                                    <label className={"input_label"} htmlFor="exampleInputEmail1">Phone</label>
                                    <input type="text" name="phone" id="phone"
                                           className="form_input" aria-describedby="phoneHelp"
                                           placeholder="Enter phone" onBlur={this.handleChange} />
                                </div>
                                <div className={"error"}><InputErrors errors={this.state.phone.errors}></InputErrors></div>

                                <div className="col-md-12 text-center mb-3">
                                    <button type="submit" className={"btn btn-block mybtn tx-tfm"}>Get Started For Free</button>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="form-group">
                                        <p className="text-center"><button className={"form_link"}  onClick={this.props.activateSignupAndLogin()}>Already have an account?</button></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SignUp);
