import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import SearchPage from "./pages/search/search_page";
import HomePage from "./pages/home/home_page";
import SingleApartment from "./pages/singleApartment/single_apartment";
import Header from "./components/header/header";
import Loading from "./components/loading/loading";
import Footer from "./components/footer/footer";
import MySpace from "./pages/my_space/my_space";


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
        };
    };

    componentDidMount() {
       this.handleSuccess()
    };

    handleSuccess = () => {
        setTimeout( () => {
            this.setState({loading: false,});
        },1500);
    };

    render() {
        const {loading} = this.state;
        return(
            <div>

                <Router>
                    <Header/>

                        <Switch>

                            <Route path="/searchPage">
                                {loading ? <Loading type={"loading"}/> :<SearchPage type={"apartments"}/>}
                            </Route>

                            <Route path={"/singleApartment/:id"}
                                   component={(props) => <SingleApartment aptId={props.match.params.id}/>}/>

                            <Route path={"/My"}>
                                <MySpace/>
                            </Route>

                            <Route path="/" exact>
                                <HomePage type={"apartments"} loading={this.state.loading}/>
                            </Route>

                        </Switch>
                    <Footer/>
                </Router>
            </div>
        )
    }
}

export default App;
