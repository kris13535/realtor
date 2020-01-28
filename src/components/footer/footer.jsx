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
                    </div>
                </div>

                <div className={"bottom_part"}>
                    <p>© 1995-2019<a href="/">National Association of REALTORS®</a> and <a href="/">
                        Move, Inc.</a> All rights reserved.</p>
                </div>
            </div>
        )
    }
}

export default Footer;