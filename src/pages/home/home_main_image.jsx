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

                    <div className={"menu_bar"}>
                        <ul>
                            <li><a href="/">BUY</a></li>
                            <li><a href="/">RENT</a></li>
                            <li><a href="/">JUST SOLD</a></li>
                            <li className={"d-none d-lg-flex"}><a href="/">HOME VALUE</a></li>
                        </ul>
                    </div>

                    <form>
                        <input type="text" name="text" placeholder="Address, city, Neighborhood or Zip"/>
                        <Link to={"SearchPage"}>
                            <button>search</button>
                        </Link>
                    </form>

                    <div className={"background_bottom"}>
                        <a href="/"><img src={"./images/ohio.png"} alt={"/"}/></a>
                        <div className={"background_bottom_2"}>
                            <a href="/"><p>Help pepole affected by recent tornadoes</p></a>
                            <button>Donate Now</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeMainImage;