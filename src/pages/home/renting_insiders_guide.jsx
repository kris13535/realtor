import React from 'react';

class RentingInsidersGuide extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div>
                <hr/>

                <div className={"sixth_row"}>
                    <div className={"sixth_row_part"}>
                        <h5>Popular Real Estate Markets</h5>
                        <ul>
                            <li><a href="/">Washington Real Estate</a></li>
                            <li><a href="/">Chicago Real Estate</a></li>
                            <li><a href="/">Dallas Real Estate</a></li>
                            <li><a href="/">Fort Worth Real Estate</a></li>
                        </ul>
                    </div>

                    <div className={"sixth_row_part"}>
                        <h5>Popular Apartment Cities</h5>
                        <ul>
                            <li><a href="/">Denver Apartments</a></li>
                            <li><a href="/">Miami Apartments</a></li>
                            <li><a href="/">Miami Beach Apartments</a></li>
                            <li><a href="/">Portland OR Apartments</a></li>
                        </ul>
                    </div>

                    <div className={"sixth_row_part"}>
                        <h5>Popular Resources</h5>
                        <ul>
                            <li><a href="/">Homes For Sale Near Universities</a></li>
                            <li><a href="/">Local Real Estate Market</a></li>
                            <li><a href="/">Real Estate Mobile Apps</a></li>
                            <li><a href="/">Android Rentals App</a></li>
                        </ul>
                    </div>

                    <div className={"sixth_row_part"}>
                        <h5>US Real Estate Overview & Homes for Sale</h5>
                        <ul>
                            <li><a href="/">Alabama Real Estate Overview(320 new listings)</a></li>
                            <li><a href="/">Alaska Real Estate Overview(61 new listings)</a></li>
                            <li><a href="/">Arizona Real Estate Overview(762 new listings)</a></li>
                            <li><a href="/">Arkansas Real Estate Overview(320 new listings)</a></li>
                        </ul>
                    </div>

                </div>

                <div className={"show_more"}>
                    <button onClick={() => this.handleClick()}>SHOW MORE<img src={"./images/icons8-triangle-arrow-24.png"} alt={"/"}/></button>
                    <button>SHOW MORE<img src={"./images/icons8-triangle-arrow-24.png"} alt={"/"}/></button>
                    <button>SHOW MORE<img src={"./images/icons8-triangle-arrow-24.png"} alt={"/"}/></button>
                    <button>SHOW MORE<img src={"./images/icons8-triangle-arrow-24.png"} alt={"/"}/></button>
                </div>

                <hr/>
            </div>
        )
    }
}

export default RentingInsidersGuide;