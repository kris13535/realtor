import React from 'react';
import validate, {field} from '../../components/login_signup/validator';
import InputErrors from "../../components/login_signup/inputErrors";
import api from "../../server_api/api";
import "../../css/mySpace/my_space.css"

class MySpace extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            address: field({name: 'address', isRequired: true}),
            city_id: field({name: 'city', isRequired: true}),
            price: field({name: 'price', isRequired: true}),
            number_of_room:field({name: 'number_of_room', isRequired: true}),
            number_of_bath: field({name: 'number_of_bath', isRequired: true}),
            sqft: field({name: 'sqft', isRequired: true}),
            description: field({name: 'description', isRequired: true}),
            sale_status: '',
            property_type: '',

            main_image: {},
            images: {},

            arr_images: [0],
            city_list: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const data= await api.getCitiesName();
        this.setState({
                city_list: data.data
        });
    }

    city_to_cityId(){
        this.state.city_list.map((item, index) => {
            if(item.name === this.state.city_id.value){
                this.state.city_id.value= item.id
            }
        })
    }

    handleChange({target:{name,value}}){
        if (name === "sale_status" || name=== "property_type"){
            this.setState({
                [name]: { ...this.state[name], value,}
            });
        }
        else {
            const errors = validate(name, value, this.state[name].validations);
            this.setState({
                [name]: {
                    ...this.state[name],
                    value,
                    errors
                }
            }, () => name === "city_id" ? this.city_to_cityId() : null );
        }

        console.log(this.state);
    }

    handleChangefile =(e)=>{
        if (e.target.id === "main_image"){
            this.state.arr_images[0] = e.target.files[0];
        }

        if (e.target.id === "images"){
            this.setState({
                images:[...e.target.files]
            }, () =>  {for(let i = 0 ; i<this.state.images.length;i++){
                this.state.arr_images.push(this.state.images[i])}});

        }

    };


    handleSubmit = (event)=> {
        event.preventDefault();
        const formData = new FormData();
        let isOK = true;
        // for (let prop in this.state) {
        //     const fa = this.state[prop];
        //     const errors = validate(prop, fa.value, fa.validations);
        //     if (errors.length) {
        //         isOK = false;
        //         this.setState({
        //             [prop]: {
        //                 ...this.state[prop],
        //                 errors
        //             }
        //         });
        //     }
        // }
        if(isOK){



            for(let prop in this.state){
                // if(prop === "main_image"){
                //     formData.append('main_image',this.state.main_image);
                // }
                // else if(prop === "images"){
                //     // this.state.images.forEach(image => {formData.append('images',image)});
                //     for(let i = 0 ; i<this.state.images.length;i++){
                //         formData.append(`images${i}`,this.state.images[i])
                //     }
                // }
                // else {
                //     formData.append(prop,this.state[prop].value);
                // }

                if(prop === "main_image" || prop === "images" || prop === "city_list"){
                    continue;
                }
                else if(prop === "arr_images"){
                    this.state.arr_images.forEach(image => {formData.append('images',image)});
                    // for(let i = 0 ; i<this.state.arr_images.length;i++){
                    //     formData.append(`images${i}`,this.state.arr_images[i])
                    // }
                    // formData.append(prop,this.state[prop]);

                }
                else {
                    formData.append(prop,this.state[prop].value);
                }
            }

            for( var i of formData.entries()){
                console.log(i);
            }
            api.AddNewApartment(formData)
                .then(res => {console.log(res)})

        }
    };


    render() {
        console.log(this.state);
        return (
            <div className={"my_space row"}>
                <div className="col-md-5 mx-auto">
                    <div className="apartment_form form">
                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <h1 className={"head_line_upload"}>Upload new apartment</h1>
                            </div>
                        </div>
                        <form  onSubmit={this.handleSubmit}>
                            <div className={"d-flex"}>
                                <div className="form">

                                    <div className="col-md-4 mb-3 input_div">
                                        <label className={"input_label"} htmlFor="validationDefault01">City</label>
                                        <input className="form_input" list="city_list" type="text" name="city_id" placeholder="Enter city" placeholder="Enter city name" onBlur={this.handleChange}/>
                                        <datalist id="city_list">
                                            {this.state.city_list.map((item, index) => {
                                                return ( <option value={item.name}/>)})
                                            }
                                        </datalist>
                                    </div>
                                    <div className={"error"}><InputErrors errors={this.state.city_id.errors}></InputErrors></div>


                                    <div className="col-md-4 mb-3 input_div">
                                        <label className={"input_label"} htmlFor="validationDefault01">Address</label>
                                        <input className="form_input" type="text"  name="address" placeholder="Enter address" onBlur={this.handleChange} />
                                    </div>
                                    <div className={"error"}><InputErrors errors={this.state.address.errors}></InputErrors></div>


                                    <div className="col-md-4 mb-3 input_div">
                                        <label className={"input_label"} htmlFor="validationDefault01">Price</label>
                                        <input  className="form_input" type="number" min={0} name="price" placeholder="Enter price" onBlur={this.handleChange} />
                                    </div>
                                    <div className={"error"}><InputErrors errors={this.state.price.errors}></InputErrors></div>

                                    <div className="col-md-4 mb-3">
                                        <label className={"input_label"} htmlFor="validationDefault01">Number of room</label>
                                        <input  className="form_input" type="number" min={0} name="number_of_room" placeholder="Enter number of room" onBlur={this.handleChange} />
                                    </div>
                                    <div className={"error"}><InputErrors errors={this.state.number_of_room.errors}></InputErrors></div>

                                    <div className="col-md-4 mb-3">
                                        <label className={"input_label"} htmlFor="validationDefault01">Number of bath</label>
                                        <input type="number" min={0} className="form_input"  name="number_of_bath" placeholder="Enter number of bath" onBlur={this.handleChange} />
                                    </div>
                                    <div className={"error"}><InputErrors errors={this.state.number_of_bath.errors}></InputErrors></div>
                                </div>
                                <div className={"form"}>
                                    <div className="col-md-4 mb-3">
                                        <label className={"input_label"} htmlFor="validationDefault01">SQFT</label>
                                        <input type="number" min={0} className="form_input"  name="sqft" placeholder="Enter sqft" onBlur={this.handleChange} />
                                    </div>
                                    <div className={"error"}><InputErrors errors={this.state.sqft.errors}></InputErrors></div>

                                    <div className="col-md-4 mb-3">
                                        <label className={"input_label"} htmlFor="validationDefault01">Description</label>
                                        <input type="text"  className="form_input" name="description" placeholder="Enter description" onBlur={this.handleChange} />
                                    </div>
                                    <div className={"error"}><InputErrors errors={this.state.description.errors}></InputErrors></div>

                                    <div className={"radio_butt"}>
                                        <input type="radio" id={"rent_radio"} name="sale_status" value="rent" onClick={this.handleChange}/><label htmlFor={"rent_radio"}>Rent </label>
                                        <input type="radio" id={"sale_radio"} name="sale_status" value="sale" onClick={this.handleChange}/><label htmlFor={"sale_radio"}>Sale </label>
                                        <input type="radio" id={"both_radio"} name="sale_status" value="both" onClick={this.handleChange}/><label htmlFor={"both_radio"}>Both </label>
                                    </div>

                                    <div>
                                        <select name="property_type" onBlur={this.handleChange} placeholder="Enter property type">
                                            <option value={"house"}>House</option>
                                            <option value={"ranch"}>Ranch</option>
                                            <option value={"condo"}>Condo</option>
                                            <option value={"land"}>Land</option>
                                        </select>
                                    </div>

                                    <div className="file btn btn-lg">
                                        <label className={"input_label"} >Upload apartment main image</label>
                                        <input id={"main_image"} type="file" name="file" className="form_input"  onChange={this.handleChangefile}/>
                                    </div>

                                    <div className="file btn btn-lg">
                                        <label className={"input_label"} >Upload apartment images</label>
                                        <input id={"images"} type="file" name="files" className="form_input"  onChange={this.handleChangefile} multiple />
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default MySpace;
