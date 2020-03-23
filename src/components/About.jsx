import React, {Component} from "react";
import Cards from "./Cards";
import NavBar from "./NavBar";

class About extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>About</h1>
                <h4>Burgas Free University</h4>
                <hr/>
                <span>Web technologies and applications project.</span>
                <p>Here you can find some of my projects -> <a href="https://github.com/MitkoDonev?tab=repositories">GitHub
                    Repositories</a></p>
                <hr/>
                <Cards/>
            </div>
        );
    }
}

export default About;