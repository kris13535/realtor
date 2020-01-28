import React from 'react';

class PropertyTypeFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        // 'house','ranch','condo','land'
        return (
            <div className=" d-none d-lg-flex dropdown dropdown_button">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Property Type
                </button>
                <div className="property_type dropdown-menu" aria-labelledby="dropdownMenuButton">

                    <div className="dropdown_titel d-flex justify-content-between titel_property_type">
                        <p>Property Type</p>
                    </div>

                    <div className="row d-flex justify-content-around align-items-center">
                        <div className="col-6">
                            <div className="icon_property_type">
                                <label htmlFor="house" ><i className={"fas fa-home"}></i><span className="icon_text">Home</span></label>
                                <input id={"house"} type="radio" name="property_type" value="house" onChange={this.props.handleChange()}></input>
                            </div>

                            <div className="icon_property_type">
                                <label htmlFor="condo" ><i className={"fas fa-building"}></i><span className="icon_text">Condo</span></label>
                                <input id={"condo"} type="radio" name="property_type" value="condo" onChange={this.props.handleChange()}></input>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="icon_property_type">
                                <label htmlFor="ranch" ><i className={"fas fa-tractor"}></i><span className="icon_text">Ranch</span></label>
                                <input id={"ranch"} type="radio" name="property_type" value="ranch" onChange={this.props.handleChange()}></input>
                            </div>

                            <div className="icon_property_type">
                                <label htmlFor="land"><i className={"fas fa-tree"}></i><span className="icon_text">Land</span></label>
                                <input id={"land"} type="radio" name="property_type" value="land" onChange={this.props.handleChange()}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PropertyTypeFilter;