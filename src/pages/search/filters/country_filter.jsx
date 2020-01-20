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
                <input list="country_list" type="text" name="country" onChange={this.props.handleChange()}
                       placeholder="Enter country name"/>
                <datalist id="country_list">
                    {this.props.countries.map((item, index) => {
                        return ( <option value={item}/>)})
                    }
                </datalist>
            </div>
        )
    }
}

export default CountryFilter;