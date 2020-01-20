import React from 'react';
import Card from "../../components/card/card.jsx";
import Filters from "./filters/filters";
import axios from "axios";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartments: [],
            filtered: "",
            countries: [],
            cities: [],
        }
    };

    componentDidMount(){
        this.getdata();
    }

    async getdata(){
        const data = await axios.get(`http://localhost:5000/apartments?${this.state.filtered}`);

        let countries_array= [];
        let cities_array = [];
        data.data.apartments.map(item => {return countries_array.push(item.country) , cities_array.push(item.city_name) });

        this.setState({
            apartments:data.data.apartments,
            countries: Array.from(new Set(countries_array)),
            cities: Array.from(new Set(cities_array)),
        });
    }

    // checkRange = ( value, min, max, label) => {
    //     let cur_val = value[label];
    //     if (label === 'price') {
    //         cur_val = value[label]*100000;
    //     }
    //     min = (min === undefined || min === "") ?  0 : min;
    //     max = (max === undefined || max === "") ?  Infinity : max;
    //
    //     return (cur_val >= min && cur_val <= max);
    // };
    //
    data_price_multiplication = (price) => {
        if (price && typeof price !== "number") {
            let multiplication_price_max = price.slice(-1);

            if (multiplication_price_max === "k") {
                price = parseInt(price.slice(1)) * 1000;
            } else if (multiplication_price_max === "M") {
                price = parseInt(price.slice(1)) * 1000000;
            }
        }
        return price;
    };

    dataToString(data) {
        let str = "";
        for (let prop in data) {
            str += prop + '=';
            str += data[prop] + '&'
        }
        return str;
    }

    updateGalleryItems  = (data) => {

       if(data.minPrice){
           data.minPrice = this.data_price_multiplication(data.minPrice);
       }
       if(data.maxPrice){
            data.maxPrice = this.data_price_multiplication(data.maxPrice);
       }


       data = this.dataToString(data);

        this.setState({
            filtered: data,
        }, () => this.getdata());




        // let {cities, apartments, } = this.state;
        // let temp = this.state.apartments;
        // let new_apartments = [];
        //
        //
        // new_apartments = temp.filter(function (apartment) {
        //                 const city = cities.find(city => city.id === apartment.cityId);
        //                 const city_name = city.label;
        //                 if (city_name.toLowerCase().includes(data.city.toLowerCase())){ return apartment}
        //             });
        //
        // if (data.price_min || data.price_max) {
        //     data.price_min = this.data_price_multiplication(data.price_min);
        //     data.price_max = this.data_price_multiplication(data.price_max);
        //
        //     if (data.price_max || data.price_min) {
        //         new_apartments = new_apartments.filter(obj => this.checkRange(obj, data.price_min , data.price_max , "price"))
        //     }
        // }
        // if (data.bed_min || data.bed_max) {
        //     new_apartments = new_apartments.filter (obj => this.checkRange(obj, data.bed_min, data.bed_max, "number_of_beds"))
        // }
        // if (data.room_min || data.room_max) {
        //     new_apartments = new_apartments.filter(obj => this.checkRange(obj, data.room_min, data.room_max, "number_of_rooms"))
        // }
        // if (data.no_filters){
        //         new_apartments = temp;
        // }

        // this.setState({filtered:new_apartments})
    };


    render() {
        const { cities, apartments } = this.state;
        const buildSquareDetails = () => {
            return apartments.map((item, i) => {
                return (
                    <Card {...item} cities={cities} type={this.props.type} key={i}/>
                )
            })
        };

        return (
            <div style={{overflow:"hidden"}}>
                <div>
                    <Filters updateGalleryItems={this.updateGalleryItems} countries={this.state.countries} cities={this.state.cities} />
                </div>

                <div className={"row m-0 d-flex justify-content-around"}>
                    {buildSquareDetails()}
                </div>
            </div>
        )
    }
}


export default Gallery;
