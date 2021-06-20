import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Paper,
    TableBody,
    Button
} from '@material-ui/core';

class FormDetails extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onItemDelete = this.onItemDelete.bind(this);
    }

    onItemDelete(userName) {
        this.props.deleteItem(userName);
    }

    render() {
        const { items } = this.props;

        return (
            <div className="formDetails">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>User Name</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Hobbies</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Task</TableCell>
                            <TableCell>Option</TableCell>
                        </TableRow>
                        </TableHead>

                        <TableBody>
                            {
                                items.length > 0 && items.map((item, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>{item.userName}</TableCell>
                                            <TableCell>{item.gender}</TableCell>
                                            <TableCell>{item.hobbies}</TableCell>
                                            <TableCell>{item.age}</TableCell>
                                            <TableCell>{item.date.getDate()}</TableCell>
                                            <TableCell>{item.task}</TableCell>
                                            <TableCell>{item.selectedOption.label}</TableCell>
                                            
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() =>this.onItemDelete(item.userName)}
                                                >
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow> 
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default FormDetails;
