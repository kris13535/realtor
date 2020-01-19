import React from 'react';

class ListingsInSanFrancisco extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={"container new_listings"}>
                <h2>New Listings in San Francisco, CA</h2>
                <a href="/">View All 422 New Listing</a>
            </div>
        )
    }
}

export default ListingsInSanFrancisco;