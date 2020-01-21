import React from 'react';
import "../../css/login_signupCss/login_signupCSS.css"
import validate, {field} from './validator';
import InputErrors from "./inputErrors";
import api from "../../server_api/api";

class LogIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: field({name: 'email', isRequired: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}),
            password: field({name: 'password', isRequired:true, minLength: 6}),
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
        for (let prop in this.state) {
            const fa = this.state[prop];
            const errors = validate(prop, fa.value, fa.validations);
            if (errors.length) {
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
            const result = this.state;
            for(let prop in this.state){
                result[prop] = this.state[prop].value;
            }
            api.loginUser(result)
                .then(res => {console.log(res)})

        }
    };



    render() {
        return (
            <div className={"row"} onClick={ this.props.handleChildClick()}>
                <div className="col-md-5 mx-auto">
                    <div className="myform form ">
                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <h1 className={"head_line"}>Login</h1>
                            </div>
                        </div>
                        <form action="" method="post" name="login" onSubmit={this.handleSubmit}>
                            <div className="form-group d-flex input_div">
                                <label className={"input_label"} htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" name="email"
                                       className="form_input" id="email" aria-describedby="emailHelp"
                                       placeholder="Enter email" onBlur={this.handleChange}/>
                            </div>
                            <div className={"error"}><InputErrors errors={this.state.email.errors}></InputErrors></div>

                            <div className="form-group d-flex input_div">
                                <label className={"input_label"} htmlFor="exampleInputEmail1">Password</label>
                                <input type="password" name="password" id="password"
                                       className="form_input" aria-describedby="emailHelp"
                                       placeholder="Enter password" onBlur={this.handleChange}/>
                            </div>
                            <div className={"error"}><InputErrors errors={this.state.password.errors}></InputErrors></div>

                            <div className="form-group">
                                <p className="text-center">By signing up you accept our <a className={"form_link"} href="#">Terms Of Use</a></p>
                            </div>
                            <div className="col-md-12 text-center ">
                                <button type="submit" className=" btn btn-block mybtn tx-tfm">Login</button>
                            </div>
                            <div className="col-md-12 ">
                                <hr/>
                            </div>
                            <div className="form-group">
                                <p className="text-center">Don't have account? <button className={"form_link"} id="signup" onClick={this.props.activateSignupAndLogin()}>Sign up here</button></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default LogIn;
