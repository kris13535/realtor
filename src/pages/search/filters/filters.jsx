import React from 'react';
import '../../../css/searchCss/filters.css';
import CountryFilter from "./country_filter";
import PriceFilter from "./price_filter";
import PropertyTypeFilter from "./property_type_filter";
import BathroomFilter from "./bathroom_filter";
import RoomFilter from "./room_filter";
import CityFilter from "./city_filter";


class Filters extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data : {},
            country: 1,
        }

    }

    handleChange = (e) => {
        const {name, value} = e.target;
        let test = this.state.data;
        test[name] = value;
        this.setState({
            data : test
        });
        this.props.updateGalleryItems(this.state.data);

        if(name === "country"){
            this.setState({
                country : value,
            })
        }
    };

    handleNoFilters = () => {
        this.setState({
            data: {},
        }, () => {this.props.updateGalleryItems(this.state.data);})
    };


    render() {
        return(
            <div className="container-fluid">
                <div className={"row d-flex filters"}>
                    <div className={"search_button"}>

                        <form className="d-flex">
                            <CountryFilter handleChange={() => this.handleChange} countries={this.props.countries}/>
                            <CityFilter handleChange={() => this.handleChange} country={this.state.country}/>
                            <PriceFilter handleChange={() => this.handleChange}/>
                            <PropertyTypeFilter handleChange={() => this.handleChange}/>
                            <BathroomFilter handleChange={() => this.handleChange}/>
                            <RoomFilter handleChange={() => this.handleChange}/>

                            <div className={"d-none d-lg-flex no_filters"}>
                                <button name="no_filters" onClick={this.handleNoFilters}>All apartments</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filters;