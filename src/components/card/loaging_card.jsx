import React from 'react';

class LoagingCard extends React.Component{
    render(){
        return(
            <div className={"box loading_box"}>
                <div className={"card shadow_box"}>
                    <div className={"price"}>
                        <img className={"card-img-top"} src= {`./images${this.props.loading_img}`} alt="/"/>
                    </div>

                    <div className={"data_box"}>
                        <div className={"loading_background sort_loading_background"}><span className={"loading_sine"}></span></div>
                        <div className={"loading_background"}><span className={"loading_sine"}></span></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default LoagingCard;
