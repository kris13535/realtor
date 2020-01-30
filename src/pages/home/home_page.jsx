import React from 'react';

import "../../css/homeCss/home_page.css"
import HomeMainImage from "./home_main_image";
import ListingsInSanFrancisco from "./listings_in_san_francisco";
import HomeApartmentsCard from "./home_apartments_cards";
import StatisticsData from "./statisticsData";
import HomeTrendsImage from "./home_trends_image";
import HomeFamilyPart from "./home_family_part";
import ApartmentsInTelAvivYafo from "./apartments_in_tel_aviv";
import api from "../../server_api/api";


class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            apartments_4: [],
        }
    }

    componentDidMount(){
        this.getData();
    };

    async getData(){
        const data = await api.getLastFourApartments();
        this.setState({apartments_4:data.apartments, loading: false});
    }

    render() {
        return (
            <div>
                <HomeMainImage/>
                <ListingsInSanFrancisco/>
                <HomeApartmentsCard {...this.props} apartments_4={this.state.apartments_4} />
                <HomeTrendsImage/>
                <StatisticsData/>
                <HomeFamilyPart/>
                <ApartmentsInTelAvivYafo {...this.props}/>
            </div>
        )
    }
}

export default HomePage;