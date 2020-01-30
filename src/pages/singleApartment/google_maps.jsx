import React from 'react';

class GoogleMaps extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={"map_apartment"}>
                <iframe title={"map"} src={`https://maps.google.com/maps?q=${(this.props.apartment.country + this.props.apartment.city_name).replace(/\s/g, '')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                        frameBorder="0"
                        style={{border:"0"}} allowFullScreen>
                </iframe>
            </div>
        )
    }
}

export default GoogleMaps;