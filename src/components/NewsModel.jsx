import React, {Component} from 'react';
import {Image} from "react-bootstrap";

class NewModel extends Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                {data.slice(0, 5).map((item, index) => (
                    <article key={index} style={{textAlign: "left"}}>
                        <span id="span"><strong>Title:</strong> {item.title}<br/>
                            <strong>Description:</strong> {item.description}<br/>
                            <strong>Origin:</strong> {item.source.name}<br/>
                            <strong>URL:</strong> {item.url}<br/>
                            <strong>Author:</strong> {item.author}<br/>
                            <strong>Published:</strong> {item.publishedAt}</span><br/>
                        <Image src={item.urlToImage} height="200" width="200" roundedCircle="true"/>.
                        <hr/>
                    </article>
                ))}
            </div>
        );
    }
}

export default NewModel;