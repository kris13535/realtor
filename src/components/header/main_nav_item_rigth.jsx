import React from 'react';
import cookie from "react-cookies";



class Main_nav_item_rigth extends React.Component{

    onLogout() {
        cookie.remove('login_user', { path: '/' })
    }

    render() {
        return(
            <div className={"first_row_rigth"}>

                <div className={"d-none d-lg-flex iphone_img"}>

                    <div className={"ipone_img_logo"} ><a href="/"><img src={"images/iphone.png"} alt={"/"}/></a></div>

                    <div className={"iphone"}>
                        <div className={"line_iphone first_child"}>
                            <img src={"images/kJm5beY.png"} alt={"/"}/>
                            <div className={"part_iphone"}>
                                <a href="/">Realtor.com® mobile apps</a>
                                <p>Find homes for sale or rent on <br/>iPhone, iPad, and Android</p>
                            </div>
                        </div>

                        <div className={"line_iphone"}>
                            <img src={"images/84e94sp.png"} alt={"/"}/>
                            <div className={"part_iphone"}>
                                <a href="/">Realtor.com® Real Estate</a>
                                <div className={"iOS"} ><a href="/">iOS</a>
                                    <p className={"p_spae"}>|</p>
                                    <a href="/">Android</a>
                                </div>
                            </div>
                        </div>

                        <div className={"line_iphone"}>
                            <img src={"images/oA4SEKw.png"} alt={"/"}/>
                            <div className={"part_iphone"}>
                                <a href="">Realtor.com® Rentals</a>
                                <div className={"iOS"} >
                                    <a href="/">iOS </a>
                                    <p className={"p_spae"}>|</p>
                                    <a href="">Android</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.user ?
                    <ul className={"log_sign_adv"}>
                        <li className="navigation"> hello {this.props.user[0].first_name}</li>
                        <li className="navigation"><button  id={"loginButton"} onClick={this.onLogout()}>Log Out</button></li>
                    </ul>
                    :
                    <ul>
                        <li className="navigation"><button  id={"loginButton"} onClick={this.props.loginHandelClick()}>Log In</button></li>
                        <li className="navigation"><button onClick={this.props.signUpHandelClick()}>Sign Up</button></li>
                        <li className="advertise"><a href="/">Advertise</a></li>
                    </ul>
                }
            </div>

        )
    }
}

export default Main_nav_item_rigth;