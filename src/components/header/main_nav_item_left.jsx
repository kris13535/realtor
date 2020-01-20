import React from 'react';
import {navigation} from "../../app_data/header_array";
import Inner_nav_item_left from "./inner_nav_item_left.jsx";
import {Link} from "react-router-dom";

class Main_nav_item_left extends React.Component{
    constructor(){
        super();
        this.state = {
            active_menu: null,
        }
    }

    change_active_menu = (index) => {
        this.setState({
            active_menu: this.state.active_menu === index ? -1 : index,
        })
    };

    render() {
        return(
            <ul className={"inner_nav_ul"}>
                {navigation.map((main_nav_item, i) => {
                   return(
                      <li className={"inner_nav_li"} key={i}
                          onMouseOver={() => this.change_active_menu(i)}
                          onMouseOut={() => this.change_active_menu(-1)}>
                          {main_nav_item.label === 'Buy' ? <Link to={'/searchPage'}><h4 className={"inner_nav_li_label"}>{main_nav_item.label}</h4></Link> :
                              <Link to={'/'}><h4 className={"inner_nav_li_label"}>{main_nav_item.label}</h4> </Link>}
                            <Inner_nav_item_left inner_menu={main_nav_item.inner_menu} isOpen={this.state.active_menu === i}/>
                      </li>
                   )
                })}
            </ul>
        )
    }
}


export default Main_nav_item_left;