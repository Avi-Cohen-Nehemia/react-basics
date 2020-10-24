import React, { Component } from 'react';

class Length extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({inputValue: e.currentTarget.value});
    }

    render() {
        const { inputValue } = this.state;

        return (
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for='input'>{`input length: ${inputValue.length}`}</label>
                        <input
                            id='input'
                            value={inputValue}
                            onChange={(e) => this.handleChange(e)}
                            className='form-control'
                            type='text'
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default Length;
