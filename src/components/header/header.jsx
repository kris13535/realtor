import React from 'react';
import Main_nav_item_left from "./main_nav_item_left.jsx";
import Main_nav_item_rigth from "./main_nav_item_rigth";
import "../../css/headerCss/ipone_size.css";
import "../../css/headerCss/header.css";
import "../../css/headerCss/inner_nav_item_rigth.css";
import cookie from 'react-cookies';


import {
    Link
} from "react-router-dom";
import LogIn from "../login_signup/logIn";
import SignUp from "../login_signup/signUp";

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            singUp: false,
        };
    }
    componentWillMount() {
        this.state = { user: cookie.load('login_user') };
        console.log(cookie.load('login_user'));
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
    render() {
        console.log(this.state);
        return(
            <header className={"container-fluid text-align-center top-bar"}>

                <div className={"first_row_left navbar navbar-expand-lg navbar-light "}>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link to="/"><img className={"logo_img"} src={"./images/logo_basics_summery.png"} alt={"/"}/></Link>
                    <Main_nav_item_left/>
                </div>
                <div>
                    <Main_nav_item_rigth loginHandelClick={() => this.loginHandelClick}
                                         signUpHandelClick={() => this.signUpHandelClick}
                                         user={this.state.user}/>
                </div>
                {this.state.login ?
                    <div style={{ position: 'absolute', top: '0' }} onClick={() => this.loginHandelClick()} >
                        <div id={"login"} className="container-fluid login_or_singUp_page">
                            <LogIn handleChildClick={() => this.handleChildClick} activateSignupAndLogin={() => this.activateSignupAndLogin} loginHandelClick={() => this.loginHandelClick()} />
                        </div>
                    </div>
                    : null
                }
                {this.state.singUp ?
                    <div style={{ position: 'absolute', top: '0' }} onClick={this.signUpHandelClick}>
                        <div className="container-fluid login_or_singUp_page"  >
                            <SignUp handleChildClick={() => this.handleChildClick} activateSignupAndLogin={() => this.activateSignupAndLogin} />
                        </div>
                    </div>
                    : null
                }
            </header>
        )
    }
}

export default Header;