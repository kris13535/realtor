import React from 'react';
import Card from "../../components/card/card";


class CitiesPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cities: this.props.cities,
            filtered: this.props.cities,
            data : {},
        }
    };

    updateGalleryItems  = (data) => {
        const {filtered, cities} = this.state;
        let temp = cities;
        let new_apartments = [];

        new_apartments = temp.filter(function (country) {
            if (country.country.toLowerCase().includes(data.search.toLowerCase()) || country.label.toLowerCase().includes(data.search.toLowerCase()))
            {return filtered}
        });

        if (data.no_filters){
            this.setState({
                filtered : cities,
            });
        }

        this.setState({
            filtered: new_apartments,
        })
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        let test = this.state.data;
        test[name] = value;
        this.setState({
            data : test
        });
        this.updateGalleryItems(this.state.data)
    };

    render() {

        const {filtered} = this.state;
        const buildSquareDetails = () => {
            return filtered.map((item, i) => {
                return (
                    <Card {...item} type={"cities"} cities={filtered} key={i}/>
                )
            })
        };

        return(
            <div style={{overflow:"hidden"}}>

                <div className={"d-flex justify-content-center"} style={{ padding :"20px 0 20px 0"}}>
                    <form className="d-flex">
                        <input type="text" name="search" onChange={this.handleChange}
                               placeholder="Search"/>
                        <button className={"butt_filter_city"}><i className="fas fa-search"></i></button>

                        <div className={"d-none d-lg-flex no_filters"}>
                            <button name="no_filters" value={true} onClick={this.handleChange}>All countries</button>
                        </div>
                    </form>
                </div>

                <div className={"row m-0 d-flex justify-content-around"}>
                    {buildSquareDetails()}
                </div>
            </div>
        )
    }
}

export default CitiesPage;
