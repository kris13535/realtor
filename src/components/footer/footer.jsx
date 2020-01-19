import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div>
                <div style={{backgroundColor: "#333333"}}>
                    <div className={"icons_line"}>
                        <div className={"icons_line_left"}>
                            <a href="/"><i className="fab fa-facebook-square"></i></a>
                            <a href="/"><i className="fab fa-twitter-square"></i></a>
                            <a href="/"><i className="fab fa-invision"></i></a>
                            <a href="/"><i className="fab fa-instagram"></i></a>
                            <a href="/"><i className="fab fa-product-hunt"></i></a>
                            <a href="/"><i className="fab fa-youtube"></i></a>
                        </div>

                        <div className={"icons_line_rigth"}>
                            <a href="/"><img src={"./images/houselogic.png"} alt={"/"}/></a>
                            <a href="/"><img src={"./images/realtor.png"} alt={"/"}/></a>
                        </div>
                    </div>
                </div>

                <div className={"bottom_part"}>
                    <div className={"bottom_part_a"}>
                        <a href="/">About us</a>
                        <a href="/">Careers</a>
                        <a href="/">Feedback</a>
                        <a href="/">Media room</a>
                        <a href="/">Ad Choices</a>
                        <a href="/">Advertise with us</a>
                        <a href="/">Agent support</a>
                        <a href="/">Privacy</a>
                        <a href="/">Terms</a>
                        <a href="/">Home Made</a>
                        <a href="/">Tech Blog</a>
                        <a href="/">Sitemap</a>
                    </div>

                    <div>
                        <h5>PRODUCTS</h5>
                        <div className={"bottom_part_a"}>
                            <a href="/">Leads & Branding</a>
                            <a href="/">ListHub</a>
                            <a href="/">Top Producer</a>
                            <a href="/">Market Snapshot</a>
                            <a href="/">FiveStreet</a>
                            <a href="/">Move.com</a>
                            <a href="/">Relocation</a>
                            <a href="/">Moving.com</a>
                            <a href="/">International</a>
                            <a href="/">SeniorHousingNet.com</a>
                            <a href="/">Doorsteps</a>
                            <a href="/">Remodelista</a>
                            <a href="/">Gardenista</a>
                        </div>
                    </div>

                    <div>
                        <h5>NEWS CORP</h5>
                        <div className={"bottom_part_a"}>
                            <a href="/">Barrons</a>
                            <a href="/">Checkout 51</a>
                            <a href="/">Financial News</a>
                            <a href="/">Harper Collins</a>
                            <a href="/">Mansion Global</a>
                            <a href="/">Market Watch</a>
                            <a href="/">New York Post</a>
                            <a href="/">REA Group</a>
                            <a href="/">Storyful</a>
                            <a href="/">Wall Street Journal</a>
                            <a href="/">Makaan.com</a>
                            <a href="/">Housing.com</a>
                            <a href="/">PropTiger.com</a>
                        </div>
                    </div>

                    <div>
                        <p>© 1995-2019<a href="/">National Association of REALTORS®</a> and <a href="/">
                            Move, Inc.</a> All rights reserved.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;