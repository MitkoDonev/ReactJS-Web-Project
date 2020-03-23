import React, {Component} from 'react';
import NavBar from "./NavBar";
import MyTable from "./MyTable";
import CalcForm from "./CalcForm";

class PriceCalculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rows: []
        }
    }

    render() {
        return (
            <div>
                <NavBar/>
                <h1>Delivery Calculator</h1>
                <CalcForm onSubmit={(data) => {
                    this.setState(
                        {
                            rows: this.state.rows.concat([data])
                        }
                    )
                }}/>
                <hr/>
                <MyTable data={this.state.rows}/>
            </div>
        );
    }
}

export default PriceCalculator;