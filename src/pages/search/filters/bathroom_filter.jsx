import React from 'react';

class BathroomFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className=" d-lg-flex dropdown dropdown_button">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Bath
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="dropdown_titel"><p>Bathrooms</p></div>
                    <div className="d-flex justify-content-around num_choices_div">

                        <input id={'any_Bath'} className="num_choice" type="radio" name="minBath" value={0} onChange={this.props.handleChange()}/>
                        <label htmlFor={"any_Bath"} >
                            <p className="num_choice num_choice_any">any</p>
                        </label>

                        <input id={'1_minBath'} className="num_choice" type="radio" name="minBath" value={1} onChange={this.props.handleChange()}/>
                        <label htmlFor={"1_minBath"} >
                            <p className="num_choice">1+</p>
                        </label>

                        <input id={'2_minBath'} className="num_choice " type="radio" name="minBath" value={2} onChange={this.props.handleChange()}/>
                        <label htmlFor={'2_minBath'}>
                            <p className="num_choice ">2+</p>
                        </label>

                        <input id={'3_minBath'} className="num_choice " type="radio" name="minBath" value={3} onChange={this.props.handleChange()}/>
                        <label htmlFor={'3_minBath'}>
                            <p className="num_choice">3+</p>
                        </label>

                        <input id={'4_minBath'} className="num_choice num_choice_any" type="radio" name="minBath" value={4} onChange={this.props.handleChange()}/>
                        <label htmlFor={'4_minBath'}>
                            <p className="num_choice ">4+</p>
                        </label>

                        <input id={'5_minBath'} className="num_choice num_choice_any" type="radio" name="minBath" value={5} onChange={this.props.handleChange()}/>
                        <label htmlFor={'5_minBath'}>
                            <p className="num_choice ">5+</p>
                        </label>

                    </div>

                    <div className="d-flex justify-content-around">
                        <p>Or Select Bathrooms Range</p>
                    </div>

                    <div className="d-flex justify-content-around input_data_list">

                        <input list="select_beds_from" type="number" min={"1"} name="minBath" onChange={this.props.handleChange()} placeholder="FROM"/>
                        <datalist id="select_beds_from">
                            <option value="1"/>
                            <option value="2"/>
                            <option value="3"/>
                            <option value="4"/>
                            <option value="5"/>
                        </datalist>

                        <span> - </span>

                        <input list="select_beds_to" type="number" min={"1"} name="maxBath" onChange={this.props.handleChange()} placeholder="TO"/>
                        <datalist id="select_beds_to">
                            <option value="1"/>
                            <option value="2"/>
                            <option value="3"/>
                            <option value="4"/>
                            <option value="5"/>
                        </datalist>
                    </div>
                </div>
            </div>
        )
    }
}

export default BathroomFilter;