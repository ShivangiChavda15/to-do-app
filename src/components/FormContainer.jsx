import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField,
    FormGroup,
    Checkbox,
    Button
} from '@material-ui/core';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import FormDetails from './FormDetails';
import { connect } from 'react-redux';
import { addItem, deleteItem } from '../store/actions/ItemAction';
import { bindActionCreators } from 'redux';

const options = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
];
let hobbies = [];
  
class FormContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            age: 0,
            task: '',
            gender: '',
            hobbies: [],
            date: '',
            selectedOption: {},
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleHobbyChange = this.handleHobbyChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleGenderChange(event) {
        const value = event.target.value;

        this.setState({
            gender: value
        })
    }

    handleHobbyChange(event) {
        const isChecked = event.target.checked;
        const name = event.target.name;
        
        if (isChecked) {
            hobbies.push(name);
        } else {
            const index = hobbies.indexOf(name);
            if (index > -1) {
                hobbies.splice(index, 1);
            }
        }

        this.setState({
            hobbies
        });
    }

    handleDateChange(date) {
        this.setState({
            date,
        });
    }

    handleOptionChange(selectedOption) {
        this.setState({ selectedOption });
    };

    onSubmit() {
        this.props.addItem(this.state);
        this.setState({
            userName: '',
            age: 0,
            task: '',
            gender: '',
            hobbies: [],
            date: '',
            selectedOption: {},
        });
    }

    render() {
        const { items } = this.props;

        return (
            <div className="formContainer">
                <h1>Create Form</h1>
                    <table>
                    <tr>
                        <td>
                            <TextField
                                id="standard-basic"
                                label="User Name"
                                onChange={this.handleInputChange}
                                name="userName"
                                value={this.state.userName}
                            />
                        </td>
                    </tr>

                    <tr><td><FormLabel component="legend">Gender</FormLabel></td></tr>
                    <tr>
                        <td>
                            <RadioGroup aria-label="gender" name="gender1" onChange={this.handleGenderChange}>
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </td>
                    </tr>


                    <tr><td><FormLabel component="legend">Hobby</FormLabel></td></tr>
                    <tr>
                        <td>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox name="sports" onChange={this.handleHobbyChange}/>}
                                    label="Sports"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="reading" onChange={this.handleHobbyChange}/>}
                                    label="Reading"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="music" onChange={this.handleHobbyChange}/>}
                                    label="Music"
                                />
                            </FormGroup>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <TextField
                                id="standard-basic"
                                label="Age"
                                name="age"
                                value={this.state.age}
                                onChange={this.handleInputChange}
                            />
                        </td>
                    </tr>

                    <tr><td><FormLabel component="legend">Date</FormLabel></td></tr>
                    <tr>
                        <td>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.handleDateChange}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <TextField
                                id="standard-basic"
                                label="Task"
                                name="task"
                                value={this.state.task}
                                onChange={this.handleInputChange}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Select
                                value={this.state.selectedOption}
                                onChange={this.handleOptionChange}
                                options={options}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Button variant="contained" color="primary" onClick={this.onSubmit}>
                                Add
                            </Button>
                        </td>
                    </tr>
                    </table>

                {items && items.length > 0 &&
                    <FormDetails
                        items={items}
                        deleteItem={this.props.deleteItem}
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.ItemReducer.items,
    }
}

const mapDispatchToProps = (dispatch) => {  
    return {    
        dispatch,    
        ...bindActionCreators({ addItem, deleteItem }, dispatch),  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)