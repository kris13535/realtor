import React from 'react';

import "../../css/singleApartmentCss/single_apartment.css"
import GoogleMaps from "./google_maps";
import SingleApartmentData from "./single_apartment_data";
import SingleApartmentControls from "./single_apartment_carousel";
import api from "../../server_api/api";

class SingleApartment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            apartment: null,
            img_apartment: null,
        }
    };

    async componentDidMount(){
        this.getdata();
    }

    async getdata(){
        const data = await api.getSingleApartment(this.props.aptId);
        this.setState({apartment:data.apartments});
        this.setState({img_apartment:this.state.apartment.images.toString().split(',')});
    }

    render() {
        const {apartment, img_apartment} = this.state;
        return(
            <div className={"container page-container"}>
                { apartment &&
                    <div>
                        <div className={"inpo_above_picture"}>
                            <p>onwer:<span>` {apartment.onwer}`</span></p>
                        </div>
                        <div>
                            <div className={"carousel"}>
                                <SingleApartmentControls apartment={apartment} img_apartment={img_apartment}/>
                            </div>

                            <div className={"d-flex justify-content-between inpo_div"}>
                                <SingleApartmentData apartment={apartment}/>
                                <GoogleMaps apartment={apartment}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default SingleApartment;