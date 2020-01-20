import React from 'react';

class CityFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div>
                <input list="city_list" type="text" name="city" onChange={this.props.handleChange()}
                       placeholder="Enter city name"/>
                <datalist id="city_list">
                    {this.props.cities.map((item, index) => {
                        return ( <option value={item}/>)})
                    }
                </datalist>
            </div>
        )
    }
}

export default CityFilter;