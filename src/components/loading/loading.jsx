import React from 'react';
import Card from "../card/card";
import {loading_array} from "../../app_data/loading_array";


class Loading extends React.Component{
    render() {
        return(
            <div className={"row m-0 d-flex justify-content-around"}>
                { this.props.loading_array ? this.props.loading_array.map((item, i) => {
                    return (
                        <Card {...item}  type={this.props.type} key={i}/>)
                }): loading_array.map((item, i) => {
                    return (
                        <Card {...item}  type={this.props.type} key={i}/>)
                })}
            </div>
        )
    }
}

export default Loading;
