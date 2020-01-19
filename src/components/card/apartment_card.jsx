import React from 'react';
import {Link} from "react-router-dom";
import '../../css/cardCss/card.css';


class ApartmentCard extends React.Component{
    render(){
        const {main_image, city_name, price, description, number_of_bath, number_of_room, sqft, address, heart} = this.props;

        return(
            <div className={"box"}>
                <div className={"card shadow_box"}>
                    <Link to={`/singleApartment/${this.props.id}`}>
                        <div className={"price"}>
                            <img className={"card-img-top"} src= {`http://localhost:5000/${main_image}`} alt="/"/>
                            <h3>{description}</h3>
                            <h4>{`$${price}`}</h4>
                            <div className={"heart"}>{heart}</div>
                        </div>
                    </Link>
                    <div className={"data_box"}>
                        <ul className={"d-flex"}>
                            <li>{`baths: ${number_of_bath}`}</li>
                            <li>{`rooms:  ${number_of_room}`}</li>
                            <li>{`sqft: ${sqft}`}</li>
                        </ul>
                        <span>{address}</span>
                        <Link to={`/CitiesPage`}><span>{`, ${city_name}`}</span></Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default ApartmentCard;
