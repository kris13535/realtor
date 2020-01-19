import React from 'react';

class StatisticsData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={"container happening_in_francisco"}>
                <p className={"ca"}>What's happening in Francisco, CA</p>
                <div className={"row inpo_rows"}>
                    <div>
                        <p className={"numbers"}>1,203</p>
                        <p>Homes for Sale</p>
                    </div>

                    <div>
                        <p className={"numbers"}>302</p>
                        <p>Open Houses</p>
                    </div>

                    <div>
                        <p className={"numbers"}>3,052</p>
                        <p>Recently Sold</p>
                    </div>

                    <div>
                        <p className={"numbers"}>2</p>
                        <p>Foreclosures</p>
                    </div>

                    <div>
                        <p className={"numbers"}>70</p>
                        <p>Price Redued</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default StatisticsData;