import React from 'react';
import Main_nav_item_left from "./main_nav_item_left.jsx";
import Main_nav_item_rigth from "./inner_nav_item_rigth";
import "../../css/headerCss/ipone_size.css"
import "../../css/headerCss/header.css";
import "../../css/headerCss/inner_nav_item_rigth.css";


import {
    Link
} from "react-router-dom";

class Header extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         popupOpen: false
    //     }
    // }
    //
    // togglePopup = () => {
    //   this.setState({
    //       popupOpen: !this.state.popupOpen
    //   })
    // };
    render() {
        return(
            <header className={"container-fluid text-align-center top-bar"}>

                {/*{this.state.popupOpen && <POPUP togglePopup={this.togglePopup}/>onClick={this.togglePopup}}*/}

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
                    <Main_nav_item_rigth/>
                </div>
            </header>
        )
    }
}

export default Header;