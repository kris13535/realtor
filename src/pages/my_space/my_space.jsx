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
            apartmentId: null,

        };
    }

    async componentDidMount(){
        this.getData();
    };

    async getData(){
        const data = await api.getMyApartments();
        this.setState({apartments:data.apartments, loading: false});

    }

    uploadHandelClick = () =>{
        this.setState({
            uploadButton: !this.state.uploadButton,
        })
    };

    handleChildClick = (e) => {
        e.stopPropagation();
    };

    deleteApartmentHandelClick =(id) =>{
        this.setState({
            apartmentId: id,
        }, () => this.deleteMyApartment());

    };

    async deleteMyApartment(){
        await api.deleteApartment({apartmentId: this.state.apartmentId});
        this.getData()
    }

    render() {
        return (
            <div className={"my_space  page-container"}>

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
                                <Card {...item} type={"apartments"} deleteApartmentHandelClick={this.deleteApartmentHandelClick} delete_apartment={true} key={i}/>
                            )
                        })}
                    </div>
                </div>
            </div>

        )
    }
}

export default MySpace;
