import React from 'react';

class HomeAD extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={"red_ad"}>
                <a href="/"><img src={"./images/red.png"} alt={"/"}/></a>
            </div>
        )
    }
}

export default HomeAD;