import React from 'react';
import Loading from "../../components/loading/loading";
import {loading_array} from "../../app_data/loading_array";
import Card from "../../components/card/card";

class HomeCitiesCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={"container img_row img_row_2"}>
                <div className={"row"}>
                    {this.props.loading === true ? <Loading type={"loading"} loading_array={loading_array.slice(0,4)}/> : this.props.cities_4.map(city => { return(<Card {...city} type={"cities"} cities={this.props.cities}/>)})}
                </div>
            </div>
        )
    }
}

export default HomeCitiesCard;