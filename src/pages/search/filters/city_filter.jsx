import React from 'react';
import api from "../../../server_api/api";

class CityFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            country: this.props.country,
            cities_array: [],
        }
    };

    async componentDidMount(){
        if(this.state.country !== 1){
            this.setState({
                country: `countries.name = ${this.props.country}`
            })
        }
        await this.getdata();
    }

    async getdata() {
        const data = await api.getCitiesListByCountry(`${this.state.country}`);
        this.setState({cities_array: data});
    }

    render() {

        return (
            <div>
                <input list="city_list" type="text" name="city" onChange={this.props.handleChange()}
                       placeholder="Enter city name"/>
                <datalist id="city_list">
                    {this.state.cities_array.map((item, i) => {
                        return ( <option value={item.name} key={i}/>)})
                    }
                </datalist>
            </div>
        )
    }
}

export default CityFilter;