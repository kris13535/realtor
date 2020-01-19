import React from 'react';
import '../../css/cardCss/card.css';
import ApartmentCard from "./apartment_card";
import CityCard from "./cities_card";
import LoagingCard from "./loaging_card";


class Card extends React.Component{
    constructor(props) {
        super(props);

        const {label, main_image, city_name, image, price, description, number_of_bath, number_of_room, sqft, country, address} = this.props;
        const heart = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" aria-labelledby="Save Listing" width="40" height="40" tabIndex="-1" className="jsx-2877931502 ">
            <path fill="rgba(0,0,0,0.4)" stroke="#fff" strokeWidth="3" d="M20 8.3c4.9-8 18.5-5.9 18.5 5l-.1 1.9c-.8 4.6-4 9.3-8.9 14a66.6 66.6 0 0 1-8.7 7l-.7.6-.8-.5a27.6 27.6 0 0 1-2.8-1.7c-2-1.4-4-3-6-4.7-5.6-5-9-10.3-9-15.8A10 10 0 0 1 20 8.3z" className="jsx-2877931502"></path></svg>;

        this.state = {
            apartment_card:  <ApartmentCard main_image={main_image} city_name={city_name} price={price}
                                            description={description} number_of_bath={number_of_bath}
                                            number_of_room={number_of_room} sqft={sqft} address={address} heart={heart}
                                            id={this.props.id}/>,
            cities_card: <CityCard label={label} image={image} country={country}/>,
            loading_card: <LoagingCard loading_img={this.props.loading_img}/>,
        }
    };

    render(){
        const {loading_card, apartment_card, cities_card} = this.state;
        const {type} = this.props;
        return(
            <div className={"col-xl-3 col-lg-4 col-sm-6"}>
                {type === "loading" ? loading_card : null}
                {type === "apartments" ? apartment_card : null}
                {type === "cities" ? cities_card : null}
            </div>

        )
    }
}

export default Card;
