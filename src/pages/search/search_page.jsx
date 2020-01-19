import React from 'react';
import Gallery from "./gallery";


class SearchPage extends React.Component{
    render() {
        return(
            <div className={"container-grid"} id={"fourth_row"}>
                <Gallery cities={this.props.cities} type={this.props.type}/>
            </div>
        )
    }
}

export default SearchPage;
