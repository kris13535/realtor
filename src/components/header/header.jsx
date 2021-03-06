import React from 'react';
import {Link} from "react-router-dom";
import cookie from 'react-cookies';

import "../../css/headerCss/ipone_size.css";
import "../../css/headerCss/header.css";
import "../../css/headerCss/inner_nav_item_rigth.css";
import LogIn from "../login_signup/logIn";
import SignUp from "../login_signup/signUp";
import MainNavItemRigth from "./main_nav_item_rigth";
import MainNavItemLeft from "./main_nav_item_left";


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            singUp: false,
            user: cookie.load('login_user')
        };
    }


    loginHandelClick = () => {
        this.setState({
            login: !this.state.login,
        })
    };

    signUpHandelClick = () => {
        this.setState({
            singUp: !this.state.singUp,
        });
    };

    activateSignupAndLogin = () => {
        this.loginHandelClick();
        this.signUpHandelClick();
    };

    handleChildClick = (e) => {
        e.stopPropagation();
    };

    setUser(){
        this.setState({
            user: cookie.load("login_user")
        });
    };

    render() {
        return(
            <header className={"container-fluid text-align-center top-bar"}>

                <div className={"first_row_left navbar navbar-expand-lg navbar-light "}>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link to="/"><div className={"logo_img"}> kris Properties </div></Link>
                    <MainNavItemLeft/>
                </div>
                <div>
                    <MainNavItemRigth loginHandelClick={() => this.loginHandelClick}
                                         signUpHandelClick={() => this.signUpHandelClick}
                                         setUser={() => this.setUser()}
                                         user={this.state.user}/>
                </div>
                {this.state.login ?
                    <div style={{ position: 'absolute', top: '0' }} onClick={() => this.loginHandelClick()} >
                        <div id={"login"} className="container-fluid login_or_singUp_page">
                            <LogIn handleChildClick={() => this.handleChildClick} activateSignupAndLogin={() => this.activateSignupAndLogin} setUser={() => this.setUser()} loginHandelClick={() => this.loginHandelClick()} />
                        </div>
                    </div>
                    : null
                }
                {this.state.singUp ?
                    <div style={{ position: 'absolute', top: '0' }} onClick={this.signUpHandelClick}>
                        <div className="container-fluid login_or_singUp_page"  >
                            <SignUp handleChildClick={() => this.handleChildClick} activateSignupAndLogin={() => this.activateSignupAndLogin} setUser={() => this.setUser()} signUpHandelClick={() => this.signUpHandelClick()} loginHandelClick={() => this.loginHandelClick()}/>
                        </div>
                    </div>
                    : null
                }
            </header>
        )
    }
}

export default Header;