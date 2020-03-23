import React, {Component} from 'react';
import axios from 'axios';
import NewModel from "./NewsModel";

class News extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{
            }],
            showModel: false
        }

    }

    componentDidMount() {
        this.getNews();
    }

    getNews = () => {
        const key = `284c925f69074879bfbc2c4b4e2214c8`;
        axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`)
            .then(response => {
                this.setState({
                    data: response.data.articles,
                    showModel: !this.state.showModel
                },)
            }).catch(error => {
            console.log(error)
        });
    };

    getModel() {
        if (this.state.showModel) {
            return <NewModel data={this.state.data}/>;
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <h1> News </h1>
                <hr/>
                {this.getModel()}
            </div>
        );
    }
}

export default News;