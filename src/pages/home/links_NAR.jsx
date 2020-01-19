import React from 'react';

class LinksNAR extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={"container-grid"} style={{overflow:"hidden"}}>
                <div className={"row flex-direction-column for_row"}>
                    <div className="col-lg-3">
                        <img className={"for_row_logo"} src={"./images/nar-logo.png"} alt={"/"}/>
                        <p>Find out how the NAR works for <br/>consumers and REALTORS®</p>
                    </div>

                    <div className="col-lg-3 for_row_part">
                        <h5>Learn About N.A.R</h5>
                        <ul>
                            <li><a href="/">About NAR</a></li>
                            <li><a href="/">Agent vs. REALTOR®</a></li>
                            <li><a href="/">Find an Appraiser</a></li>
                            <li><a href="/">Commercial Services</a></li>
                            <li><a href="/">NAR Global Alliances</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 for_row_part">
                        <h5>For Homeowners</h5>
                        <ul>
                            <li><a href="/">Dreamy Ways to Add Functionality to Your Outdoor Space</a></li>
                            <li><a href="/">Why Use a REALTOR® with the MRP?</a></li>
                            <li><a href="/">Real Estate Today Radio</a></li>
                            <li><a href="/">REALTORS® Relief Foundation</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 for_row_part">
                        <h5>For REALTORS®</h5>
                        <ul>
                            <li><a href="">NAR’s iOi Summit: Innovation Worth Exploring</a></li>
                            <li><a href="">Earn free business boosting rewards with MVP!</a></li>
                            <li><a href="">REALTOR Benefits® Program</a></li>
                            <li><a href="">Center for REALTOR® Development</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default LinksNAR;