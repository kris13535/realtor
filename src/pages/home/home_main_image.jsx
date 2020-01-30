import React from 'react';
import {Link} from "react-router-dom";

class HomeMainImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={"container-fluid background_image_and_form"}
                 style={{backgroundImage: `url("./images/main_image.png")`}}>
                <div className={"img_text_center"}>
                    <div className={"img_text"}>
                        <h1>The Home of Home Search</h1>
                        <p className={"d-none d-lg-flex"}>With the most complete source of homes for sale & realestate near you</p>
                    </div>

                    <div>
                        <Link to={"SearchPage"}>
                            <button>BUY APARTMENTS</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeMainImage;