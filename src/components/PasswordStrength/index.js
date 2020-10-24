import React, { Component } from 'react';

class PasswordStrength extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            color: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        // use e.currentTarget.value to keep track of
        // the input's current value
        let value = e.currentTarget.value

        this.setState({inputValue: value});

        // to avoid stale state, use the 'value' variable in
        // this method instead of taking it from the state 
        if (value.length < 1 ) {
            this.setState({ color: '' });

        } else if (value.length < 9) {
            this.setState({ color: 'red' });

        } else if (value.length < 16) {
            this.setState({ color: 'orange' });

        } else {
            this.setState({ color: 'red' });
        }
    }

    render() {
        const { inputValue, color } = this.state;

        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor='input'>{'Password Strength:'}</label>
                        <input
                            id='input'
                            value={inputValue}
                            onChange={(e) => this.handleChange(e)}
                            className='form-control'
                            type='text'
                            style={{backgroundColor: color}}
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default PasswordStrength;
