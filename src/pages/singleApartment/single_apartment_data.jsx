import React from 'react';

class SingleApartmentData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        const {apartment} = this.props;
        return (
            <div className={"more_inpo"}>
                <p className={"price"}>$ {apartment.price}</p>
                <p className={""}><b>{apartment.number_of_bath}</b> bath <b>{apartment.number_of_room}</b> rooms
                    {apartment.sqft ?<span> <b>{apartment.sqft}</b> <span> sqft</span></span> : "" }</p>
                <p className={""}>{apartment.address} , <span>{apartment.city_name}</span> </p>
            </div>
        )
    }
}

export default SingleApartmentData;