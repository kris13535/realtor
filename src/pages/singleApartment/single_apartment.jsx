import React from 'react';
import "../../css/singleApartmentCss/single_apartment.css"
import axios from "axios";
import GoogleMaps from "./google_maps";
import SingleApartmentData from "./single_apartment_data";
import SingleApartmentForm from "./single_apartment_form";
import SingleApartmentControls from "./single_apartment_carousel";

class SingleApartment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            apartment: null,
            img_apartment: null,
        }
    };

    componentDidMount(){
        this.getdata();
    }
    async getdata(){
        const data = await axios.get(`http://localhost:5000/apartments/${this.props.aptId}`);
        this.setState({apartment:data.data.apartments});
        this.setState({img_apartment:this.state.apartment.images.toString().split(',')});
        console.log(this.state.apartment);
    }


    render() {
        const {apartment, img_apartment} = this.state;

        return(

            <div className={"container"}>
                { apartment ?
                    <div>
                        <div className={"inpo_above_picture"}>
                            <p>onwer:<span>` {apartment.onwer}`</span></p>
                            <p>Brokered by: <span>Nest Seekers International, Westside</span></p>
                        </div>
                        <div>
                            <div className={"carousel"}>
                                <SingleApartmentControls apartment={apartment} img_apartment={img_apartment}/>
                                <SingleApartmentForm/>

                            </div>

                            <div className={"d-flex justify-content-between inpo_div"}>
                                <SingleApartmentData apartment={apartment}/>
                                <GoogleMaps apartment={apartment}/>
                            </div>
                        </div>
                    </div>
                    : null}
            </div>
        )
    }
}

export default SingleApartment;