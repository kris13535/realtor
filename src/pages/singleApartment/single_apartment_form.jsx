import React from 'react';

class SingleApartmentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={"d-flex more_inpo_form "}>
                <h3>More about this property</h3>
                <div className={"icons_form"}><i className={"fas fa-user"}></i>
                    <i className={"fas fa-envelope"}></i>
                    <i className={"fas fa-phone-alt"}></i>
                </div>
                <form>
                    <div className={"field"}>
                        <input type={"text"}
                               placeholder={"Your Name"}
                               name={"name"}
                               onChange={this.handleChange}/>
                    </div>
                    <div className={"field"}>
                        <input type={"email"}
                               placeholder={"Email"}
                               name={"email"}
                               onChange={this.handleChange}/>
                    </div>
                    <div className={"field"}>
                        <input type={"tel"}
                               pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"}
                               placeholder={"Phone"}
                               name={"phone"}
                               onChange={this.handleChange}/>
                    </div>
                    <div className={"field"}>
                                        <textarea name={"address"}
                                                  placeholder={"Address"}
                                                  onChange={this.handleChange}
                                                  style={{paddingLeft:'10px'}}>

                                        </textarea>
                    </div>
                    <button>Email Agent</button>
                    <p>By proceeding, you consent to receive calls and texts at the number you provided,
                        including marketing by autodialer and prerecorded and artificial voice, and email,
                        from realtor.com and others about your inquiry and other home-related matters,
                        but not as a condition of any purchase. More...</p>
                </form>
            </div>
        )
    }
}

export default SingleApartmentForm;