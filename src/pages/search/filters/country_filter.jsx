import React from 'react';

class CountryFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div>
                <input type="text" name="country" onChange={this.props.handleChange()}
                       placeholder="Enter country name"/>
                <button className={"butt_filter_city"}><i className="fas fa-search"></i></button>
            </div>
        )
    }
}

export default CountryFilter;