import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class MyTable extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("update Call")
    }

    componentDidMount() {
        console.log("mount Call")
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Product</TableCell>
                            <TableCell align="left">Quantity</TableCell>
                            <TableCell align="left">City</TableCell>
                            <TableCell align="left">Zip Code</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props && this.props.data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.product}
                                </TableCell>
                                <TableCell align="left">{row.quantity}</TableCell>
                                <TableCell align="left">{row.city}</TableCell>
                                <TableCell align="left">{row.zipCode}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default MyTable;