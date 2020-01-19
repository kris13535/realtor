import React from 'react';

class RoomFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className="d-lg-flex dropdown dropdown_button">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Rooms
                </button>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="dropdown_titel"><p>Rooms</p></div>
                    <div className={"d-flex justify-content-around num_choices_div"}>

                        <input id={'any_room'} className="num_choice" type="radio" name="minRoom" value={0} onChange={this.props.handleChange()}/>
                        <label htmlFor={"any_room"} >
                            <p className="num_choice num_choice_any">any</p>
                        </label>

                        <input id={'1_room'} className="num_choice" type="radio" name="minRoom" value={1} onChange={this.props.handleChange()}/>
                        <label htmlFor={"1"} >
                            <p className="num_choice">1+</p>
                        </label>

                        <input id={'2'} className="num_choice " type="radio" name="minRoom" value={2} onChange={this.props.handleChange()}/>
                        <label htmlFor={'2'}>
                            <p className="num_choice ">2+</p>
                        </label>

                        <input id={'3'} className="num_choice " type="radio" name="minRoom" value={3} onChange={this.props.handleChange()}/>
                        <label htmlFor={'3'}>
                            <p className="num_choice">3+</p>
                        </label>

                        <input id={'4'} className="num_choice num_choice_any" type="radio" name="minRoom" value={4} onChange={this.props.handleChange()}/>
                        <label htmlFor={'4'}>
                            <p className="num_choice ">4+</p>
                        </label>

                        <input id={'5'} className="num_choice num_choice_any" type="radio" name="minRoom" value={5} onChange={this.props.handleChange()}/>
                        <label htmlFor={'5'}>
                            <p className="num_choice ">5+</p>
                        </label>

                    </div>

                    <div className="d-flex justify-content-around">
                        <p>Or Select Bedrooms Range</p>
                    </div>

                    <div className="d-flex justify-content-around input_data_list">

                        <input list="select_baths_from" type="number" min={"1"}  name="minRoom" onChange={this.props.handleChange()}  placeholder="FROM"/>
                        <datalist id="select_baths_from">
                            <option value="1"/>
                            <option value="2"/>
                            <option value="3"/>
                            <option value="4"/>
                            <option value="5"/>
                        </datalist>

                        <span> - </span>

                        <input list="select_baths_to" type="number" min={"1"}  name="maxRoom" onChange={this.props.handleChange()}  placeholder="TO"/>
                        <datalist id="select_baths_to">
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

export default RoomFilter;