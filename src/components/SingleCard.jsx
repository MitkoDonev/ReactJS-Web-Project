import React, {Component} from 'react';
import {Card} from "react-bootstrap";

class SingleCard extends Component {
    render() {
        return (
            <div>
                <Card style={{width: '25rem', margin: '30px'}}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.subtitle}</Card.Subtitle>
                        <Card.Text>{this.props.text}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default SingleCard;