import React, {Component} from "react";
import NavBar from "./NavBar";
import Gallery from "react-photo-gallery";

class ShowRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [
                {
                    src: 'https://drop.ndtv.com/albums/AUTO/Hyundai_Aura_Su_637203215847795178/637203215875140178.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    src: 'https://drop.ndtv.com/albums/AUTO/tata-tigor-jtp/7.jpg',
                    width: 4,
                    height: 3
                },
                {
                    src: 'https://drop.ndtv.com/albums/AUTO/2019-bmw-3-series/1.jpg',
                    width: 4,
                    height: 3
                },
                {
                    src: 'https://drop.ndtv.com/albums/AUTO/Volkswagen_T-Ro_637201653508610965/637201653539236247.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    src: 'https://drop.ndtv.com/albums/AUTO/TVS_iQube_637184996133959764/637184996162241735.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    src: 'https://drop.ndtv.com/albums/AUTO/2020_auto_expo/637170293116815006.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    src: 'https://drop.ndtv.com/albums/AUTO/2020_auto_expo/637170315037295563.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    src: 'https://drop.ndtv.com/albums/AUTO/Mercedes-Maybac_637100209710428272/637100209740113686.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    src: 'https://drop.ndtv.com/albums/AUTO/porsche-taycan-turbo/1200x900_1.jpg',
                    width: 4,
                    height: 3
                },
                {
                    src: 'https://auto.ndtvimg.com/car-images/gallery/land-rover/defender/exterior/land-lover-defender.jpg?v=2020-02-26',
                    width: 4,
                    height: 3
                },
                {
                    src: 'https://drop.ndtv.com/albums/AUTO/Hyundai_Grand_i_637025058359468841/637025058404396378.jpeg',
                    width: 4,
                    height: 3
                },
                {
                    src: 'https://drop.ndtv.com/albums/AUTO/bmw_i8_roadster/5_305418_145448_6279.jpg',
                    width: 4,
                    height: 3
                },
                {
                    src: 'https://drop.ndtv.com/albums/AUTO/audi_rs5/7_165418_145416_2971.jpg',
                    width: 4,
                    height: 3
                },

            ]
        }
    }

    openPicture = (event) => {
        var currentEventTarget = event.currentTarget;
        const url = currentEventTarget.src;
        const win = window.open(url, '_blank');
        win.focus()
    };


    render() {

        return (
            <div>
                <NavBar/>
                <h1>Show room</h1>
                <hr/>
                <Gallery photos={this.state.photos} onClick={(event) => this.openPicture(event)}/>
            </div>
        );
    }
}

export default ShowRoom;