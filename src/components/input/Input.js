import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Input extends Component {
    render() {
        return (
            <TextField
                id="filled-search"
                label="Search field"
                type="search"
                className={classes.textField}
                margin="normal"
                variant="filled"
            />
        );
    }
}

export default Input;