import React from 'react';
import Card from "../../components/card/card.jsx";
import Filters from "./filters/filters";
import api from "../../server_api/api";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartments: [],
            filtered: "",
            countries: [],
        }
    };

    async componentDidMount(){
        const data = await this.getdata();
        let countries_array= [];
        data.data.apartments.map(item => {return countries_array.push(item.country)});
        this.setState({
            countries: Array.from(new Set(countries_array)),
        });
    }

    async getdata(){
        const data = await api.getfilteredApartments(this.state.filtered);
        this.setState({
            apartments:data.data.apartments,
        });

        return data
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
        });
        this.setState({
            apartments: this.state.apartments,
        }, () => this.getdata());
    };

    data_price_multiplication = (price) => {
        if (price && typeof price !== "number") {
            let multiplication_price_max = price.slice(-1);

            if (multiplication_price_max === "k") {
                price = parseFloat(price.slice(1,-1)) * 1000;
            } else if (multiplication_price_max === "M") {
                price = parseFloat(price.slice(1,-1)) * 1000000;
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

    allApartments = () => {
        this.setState({
            filtered: "",
        }, () => {this.getdata()})
    };

    render() {
        const {apartments} = this.state;
        return (
            <div style={{overflow:"hidden"}}>
                <div>
                    <Filters updateGalleryItems={this.updateGalleryItems} countries={this.state.countries} />
                </div>

                {apartments.length ?
                    <div className={"row m-0 d-flex justify-content-around"}>
                        {apartments.map((item, i) => {
                            return (
                                <Card {...item} type={this.props.type} key={i}/>
                            )
                        })}
                    </div>
                :
                    <div className={"d-none d-lg-flex no_filters"}>
                        <button  onClick={this.allApartments}>no filtered apartments is available</button>
                    </div>
                }
            </div>
        )
    }
}


export default Gallery;
