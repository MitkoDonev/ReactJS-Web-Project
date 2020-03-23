import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ShowRoom from "./ShowRoom";
import News from "./News";
import Services from "./Services";
import PriceCalculator from "./PriceCalculator";

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/showroom">
                        <ShowRoom/>
                    </Route>
                    <Route path="/calculator">
                        <PriceCalculator/>
                    </Route>
                    <Route path="/news">
                        <News/>
                    </Route>
                    <Route path="/services">
                        <Services/>
                    </Route>
                </Router>
            </div>
        );
    }
}

export default Routes;