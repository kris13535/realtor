import React from 'react';
import api from "../../server_api/api";
import "../../css/mySpace/my_space.css"
import Card from "../../components/card/card";
import UplodeNewApartment from "./uplode_new_apartment";


class MySpace extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            apartments: [],
            uploadButton: false,

        };
    }

    async componentDidMount(){
        this.getData();
    };

    async getData(){
        const data = await api.getMyApartments();
        console.log(data);
        this.setState({apartments:data.data.apartments, loading: false});
        console.log(this.state.apartments);
    }

    uploadHandelClick = () =>{
        this.setState({
            uploadButton: !this.state.uploadButton,
        })
    };

    handleChildClick = (e) => {
        e.stopPropagation();
    };

    render() {
        console.log(this.state);
        return (
            <div className={"my_space"}>


                <div className={"open_uplode_button"}>
                    <button  id={"UploadNewApartment"} onClick={this.uploadHandelClick}>Upload new apartment</button>
                </div>

                <div  onClick={this.uploadHandelClick}>
                    {this.state.uploadButton &&
                        <div className=" my_form_background">
                            <UplodeNewApartment handleChildClick={this.handleChildClick}/>
                        </div>
                    }
                </div>

                <div className={"container"}>
                    <p>my Apartments</p>
                    <div className={"row m-0 d-flex justify-content-around"}>
                        {this.state.apartments.map((item, i) => {
                            return (
                                <Card {...item} type={"apartments"} delete_apartment={true} key={i}/>
                            )
                        })}
                    </div>
                </div>
            </div>

        )
    }
}

export default MySpace;
