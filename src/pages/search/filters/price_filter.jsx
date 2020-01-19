import React from 'react';

class PriceFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className="d-none d-lg-flex" id="dropdown_buttons">
                <div className="dropdown dropdown_button">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        price
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div className="dropdown_titel"><p>Price range</p></div>

                        <div className="row d-flex flex-column">

                            <div className="d-flex justify-content-around input_data_list">
                                <input list="select_prices_from" type="text" min="0" name="minPrice" onChange={this.props.handleChange()} placeholder="NO MIN"/>
                                <datalist id="select_prices_from">
                                    <option value="$0"/>
                                    <option value="$250k"/>
                                    <option value="$450k"/>
                                    <option value="$700k"/>
                                    <option value="$900k"/>
                                    <option value="$1.2M"/>
                                    <option value="$1.4M"/>
                                    <option value="$1.6M"/>
                                </datalist>

                                <span> - </span>

                                <input list="select_prices_to" type="text" min="0" name="maxPrice" onChange={this.props.handleChange()} placeholder="NO MAX"/>
                                <datalist id="select_prices_to">
                                    <option value="$400k"/>
                                    <option value="$800k"/>
                                    <option value="$1.2M"/>
                                    <option value="$1.6M"/>
                                    <option value="$2M"/>
                                    <option value="$2.4M"/>
                                    <option value="$2.8M"/>
                                </datalist>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PriceFilter;