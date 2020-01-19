import React from 'react';

class CityCard extends React.Component{
    render(){
        const {label, image, country} = this.props;

        return(
            <div className={"box"}>
                <div className={"card shadow_box"}>
                    <div className={"price"}>
                        <img className={"card-img-top"} src= {`images/cities/${image}`} alt="/"/>
                    </div>
                    <div className={"data_box"}>
                        <ul className={"d-flex"}>
                            <li>{`country: ${country}`}</li>
                            <li>{`city:  ${label}`}</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default CityCard;
