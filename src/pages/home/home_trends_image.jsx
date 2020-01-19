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
                <a className={"black_cover"} href="/"></a>
                <div className={"img_text_2"}>
                    <h2>Trends</h2>
                    <p>Live Out a Fall Fantasy in 1 of These 7 Homes Positioned for Prime</p>
                    <p>Leaf Peeping</p>
                    <a href="/">
                        <button>Read More</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default HomeTrendsImage;