import React from 'react';

class SingleApartmentControls extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        const {apartment, img_apartment} = this.props;

        let carousel_images = [];
        if(img_apartment) {
            carousel_images.push(img_apartment.map((item,i) =>  {
                return (
                    <div className='carousel-item' key={i}>
                        <img src={`http://localhost:5000/${item}`} className="d-block w-100" alt="/"/>
                    </div>
                )
            }))
        }

        return (
            <div id="carouselExampleControls" className={"carousel slide images_carousel"} data-ride="carousel">
                <div className="carousel-inner">
                    <div className={"carousel-item active images_carousel"}>
                        <img src={`http://localhost:5000/${apartment.main_image}`} className="d-block w-100" alt="..."/>
                    </div>
                    {carousel_images}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                   data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                   data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                <h2 className={"img_absolute new_home"}>{apartment.description}</h2>
            </div>
        )
    }
}

export default SingleApartmentControls;