import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";

const CITIES = ["Sofia", "Plovdiv", "Varna", "Burgas", "Ruse", "Stara Zagora", "Pleven", "Sliven", "Dobrich",
    "Shumen", "Pernik", "Haskovo", "Yambol", "Pazardzhik", "Blagoevgrad", "Veliko Tarnovo", "Vratsa", "Gabrovo",
    "Asenovgrad", "Vidin", "Kazanlak", "Kyustendil", "Kardzhali", "Montana", "Dimitrovgrad", "Targovishte", "Lovech",
    "Silistra", "Dupnitsa", "Svishtov", "Razgrad", "Gorna Oryahovitsa", "Smolyan", "Petrich", "Sandanski", "Samokov",
    "Sevlievo", "Lom", "Karlovo", "Velingrad", "Nova Zagora", "Troyan", "Aytos", "Botevgrad"];

class CalcForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: '',
            quantity: 0,
            city: '',
            zipCode: 0
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (
            <div>
                <Form>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Product</Form.Label>
                            <Form.Control name="product"
                                          type="text"
                                          placeholder="Product"
                                          value={this.state.product}
                                          onChange={(e) => this.change(e)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control name="quantity"
                                          type="number"
                                          placeholder="Quantity"
                                          min="1"
                                          max="20"
                                          value={this.state.quantity}
                                          onChange={(e) => this.change(e)}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control name="city"
                                          as="select"
                                          value={this.state.city}
                                          onChange={(e) => this.change(e)}>
                                <option>Choose...</option>
                                {CITIES.map((city, index) => (
                                    <option key={index}>{city}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control name="zipCode"
                                          type="number"
                                          placeholder="Zip code"
                                          min="1"
                                          max="9999"
                                          value={this.state.zipCode}
                                          onChange={(e) => this.change(e)}/>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary"
                            onClick={() => this.props.onSubmit(this.state)}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default CalcForm;