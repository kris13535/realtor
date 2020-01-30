import React from 'react';
import api from "../../server_api/api";


class StatisticsData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            property_type : [],
        }
    }

    async componentDidMount() {
        const data = await api.getPropertyTypeData();
        this.setState({
            property_type: data.PropertyTypeData,
        });
    }


    render() {
        const {property_type} = this.state;
        return (
            <div className={"container happening_in_francisco"}>
                <p className={"ca"}>The amount of property types on the site</p>
                <div className={"card_wruper"}>
                    <div className={"card statistics"}>
                        <div className={"row inpo_rows"}>
                            {this.state.property_type.map((item, i) => {
                                return (
                                    <div key={i} className={"property_type_item"}>
                                        <p className={"numbers"}>{property_type[i].sum}</p>
                                        <p>{property_type[i].property_type}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StatisticsData;