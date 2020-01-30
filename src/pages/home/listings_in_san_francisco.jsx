import React from 'react';
import api from "../../server_api/api";
import {Link} from "react-router-dom";

class ListingsInSanFrancisco extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            len_apartments: null,
        }
    };

    async componentDidMount() {
        const data = await api.getLengthApartmentsArray();
        this.setState({
            len_apartments: data.length.length,
        });
    }


    render() {
        return (
            <div className={"container new_listings"}>
                <h2>See All Apartments : </h2>
                <Link to={"SearchPage"}>
                    View All {this.state.len_apartments} Apartments
                </Link>

            </div>
        )
    }
}

export default ListingsInSanFrancisco;