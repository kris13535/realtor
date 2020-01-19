import React from 'react';

class HomeUnderHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div>
                <div className={"d-flex be_ready_to_buy"}>
                    <img src={"./images/v-icon.jpg"} alt={"/"}/>
                    <span> Be Ready to Buy</span>
                    <span className={"d-none d-lg-flex"}>... How Much Can You Borrow?</span>
                    <button><b>Get Pre-Approved</b></button>
                </div>
            </div>
        )
    }
}

export default HomeUnderHeader;