import React, {Component} from 'react';
import NavBar from "./NavBar";
import News from "./News";

;

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <News />
            </div>
        );
    }
}

export default Home;