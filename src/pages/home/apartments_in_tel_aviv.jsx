import React from 'react';
import Loading from "../../components/loading/loading";
import {loading_array} from "../../app_data/loading_array";
import Card from "../../components/card/card";
import api from "../../server_api/api";

class ApartmentsInTelAvivYafo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sydney_4: [],
        }
    }

    componentDidMount(){
        this.getData();
    };

    async getData(){
        const data = await api.getLastFourSydneyApartments();
        this.setState({sydney_4: data.apartments, loading: false});
    }

    render() {
        return (
            <div className={"container img_row mt-5"}>
                <div className={"mb-4 listings_in_Sydney"}>
                    <h2>new listings in Tel Aviv-Yafo : </h2>
                </div>
                <div className={"row"}>
                    {this.props.loading === true ?
                        <Loading type={"loading"} loading_array={loading_array.slice(0,4)}/>
                        : this.state.sydney_4.map((apartment, i) => {
                            return(<Card {...apartment} cities={this.props.cities} key={i} type={this.props.type}/>)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ApartmentsInTelAvivYafo;