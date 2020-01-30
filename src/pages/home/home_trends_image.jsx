import React from 'react';

class HomeTrendsImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={"background_image_2"} style={{backgroundImage: `url("./images/foliage-homes.jpg")`}}>
                <a className={"black_cover"} href="/">

                </a>
                <div className={"img_text_2"}>
                    <p>Find the Perfect Property on <span>kris Properties</span></p>
                </div>
            </div>
        )
    }
}

export default HomeTrendsImage;