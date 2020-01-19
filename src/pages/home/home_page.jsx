import React from 'react';
import "../../css/homeCss/home_page.css"
import HomeUnderHeader from "./home_under_header";
import HomeMainImage from "./home_main_image";
import ListingsInSanFrancisco from "./listings_in_san_francisco";
import HomeApartmentsCard from "./home_apartments_cards";
import StatisticsData from "./statisticsData";
import HomeTrendsImage from "./home_trends_image";
import HomeCitiesCard from "./home_cities.cards";
import HomeFamilyPart from "./home_family_part";
import LinksNAR from "./links_NAR";
import RentingInsidersGuide from "./renting_insiders_guide";
import HomeAD from "./home_ad";
import axios from "axios";


class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            apartments_4: [],
            show_more_butt : false,
        }
    }

    componentDidMount(){
        this.getData();
    };
    async getData(){
        const data = await axios.get(`http://localhost:5000/apartments/fourLastApartmentsBydate`);
        this.setState({apartments_4:data.data.apartments,loading: false});
    }

    handleClick() {
        this.setState({
            show_more_butt: true
        });
        if (this.state.show_more === true){
        }
    }

    render() {
        const {cities} = this.props;
        const cities_4 = [];

        cities.filter(city => {
            if (cities_4.length < 4){
                cities_4.push(city);
            }
            return cities_4
        });


        return (
            <div>
                <HomeUnderHeader/>
                <HomeMainImage/>
                <ListingsInSanFrancisco/>
                <HomeApartmentsCard {...this.props} apartments_4={this.state.apartments_4} />
                <StatisticsData/>
                <HomeTrendsImage/>
                <HomeCitiesCard {...this.props} cities_4={cities_4} />
                <HomeFamilyPart/>
                <LinksNAR/>
                <RentingInsidersGuide/>
                <HomeAD/>
            </div>
        )
    }
}

export default HomePage;