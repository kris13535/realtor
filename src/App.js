import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import SearchPage from "./pages/search/search_page";
import HomePage from "./pages/home/home_page";
import SingleApartment from "./pages/singleApartment/single_apartment";
import Header from "./components/header/header";
import {getDataFromServer} from "./app_data/server_data";
import CitiesPage from "./pages/cities/cities_page";
import Loading from "./components/loading/loading";
import Footer from "./components/footer/footer";

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            apartments: [],
            cities: [],
            loading: true,
        };
    };

    componentDidMount() {
        getDataFromServer('data-rt.json',this.handleSuccess);
    };

    handleSuccess = (data) => {
        setTimeout( () => {
            this.setState({loading: false,});
        },1500);

        this.setState({
            apartments: data.apartments,
            cities: data.cities,
        })
    };
    render() {
        const {apartments, cities, loading} = this.state;
        return(
            <div>

                <Router>
                    <Header/>

                        <Switch>

                            <Route path="/searchPage">
                                {loading ? <Loading type={"loading"}/> :<SearchPage apartments={apartments} cities={cities} type={"apartments"}/>}
                            </Route>

                            <Route path={"/citiesPage"}>
                                {loading ? <Loading type={"loading"}/> :<CitiesPage cities={cities} type={"cities"}/>}
                            </Route>

                            <Route path={"/singleApartment/:id"}
                                   component={(props) => <SingleApartment apartments={apartments}
                                                                          aptId={props.match.params.id}
                                                                          cities={cities}/>}/>

                            <Route path="/">
                                <HomePage apartments={apartments} cities={cities} type={"apartments"} loading={this.state.loading}/>
                            </Route>

                        </Switch>
                    <Footer/>
                </Router>
            </div>
        )
    }
}

export default App;
