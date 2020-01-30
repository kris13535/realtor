import React from 'react';

class HomeFamilyPart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={"family_part"}>
                <div className={"row d-flex img_family_form"}>
                    <div className={"col-lg-6"}>
                        <a href="/"><img src={"./images/hp-hero-mortgage-desktop.jpg"} alt={"/"}/></a>
                    </div>
                    <div className={"col-lg-6 img_family_form_text"}>
                        <h2>Need a home loan? Get pre-approved</h2>
                        <h3>Find a lender who can offer competitive mortgage rates and help you with
                            pre-approval.</h3>
                    </div>
                </div>

                <div className={"row d-flex img_family_form"}>
                    <div className={"col-lg-6 order-2"}>
                        <a href="/"><img src={"./images/hp-local-desktop.jpg"} alt={"/"}/></a>
                    </div>

                    <div className={"col-lg-6 order-1 img_family_form_text"}>
                        <h2>Find Your Neighborhood</h2>
                        <h3>Does it have pet-friendly rentals? What are the crime rates? How are the schools?
                            Get
                            important local information on the area you're most interested in.</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeFamilyPart;