import React from 'react';

class PropertyTypeFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className=" d-none d-lg-flex dropdown dropdown_button">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Property Type
                </button>
                <div className="property_type dropdown-menu" aria-labelledby="dropdownMenuButton">

                    <div className="dropdown_titel d-flex justify-content-between titel_property_type">
                        <p>Property Type</p>
                        <button>Done</button>
                    </div>


                    <div className="row d-flex justify-content-around align-items-center">
                        <div className="col-6">
                            <div className="icon_property_type"><i className={"fas fa-building"}></i><span className="icon_text">Any</span></div>
                            <div className="icon_property_type"><i className={"fas fa-home"}></i><span className="icon_text">Family Home</span></div>
                            <div className="icon_property_type"><i className={"fas fa-warehouse"}></i><span className="icon_text">Warehouses</span></div>
                        </div>

                        <div className="col-6">
                            <div className="icon_property_type"><i className={"fas fa-truck-moving"}></i><span className="icon_text">Mobile</span></div>
                            <div className="icon_property_type"><i className={"fas fa-tractor"}></i><span className="icon_text">Farm</span></div>
                            <div className="icon_property_type"><i className={"fas fa-tree"}></i><span className="icon_text">Land</span></div>
                        </div>
                    </div>

                    <div className="border_nyc">
                        <p>NYC Only</p>
                    </div>

                    <div className="row d-flex justify-content-around align-items-center">
                        <div className="col-6">
                            <div className="icon_property_type"><i className={"fas fa-hotel"}></i><span className="icon_text">Any</span></div>
                            <div className="icon_property_type"><i className={"fas fa-landmark"}></i><span className="icon_text">Family Home</span></div>
                        </div>

                        <div className="col-6">
                            <div className="icon_property_type"><i className={"fas fa-city"}></i><span className="icon_text">Mobile</span></div>
                            <div className="icon_property_type"><i className={"fas fa-igloo"}></i><span className="icon_text">Farm</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PropertyTypeFilter;