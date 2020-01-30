import React from 'react';
import Loading from "../../components/loading/loading";
import {loading_array} from "../../app_data/loading_array";
import Card from "../../components/card/card";

class HomeApartmentsCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={"container img_row"}>
                <div className={"row"}>
                    {this.props.loading === true ?
                        <Loading type={"loading"} loading_array={loading_array.slice(0,4)}/>
                        : this.props.apartments_4.map( (apartment ,i)=>
                        { return(<Card {...apartment} cities={this.props.cities} key={i} type={this.props.type}/>)})}
                </div>
            </div>
        )
    }
}

export default HomeApartmentsCard;