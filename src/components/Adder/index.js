import React, { Component } from 'react';

class Adder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: 0,
            list: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let value = e.currentTarget.value;
        this.setState({inputValue: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        const { list, inputValue } = this.state;

        this.setState({
            inputValue: '',
            list: [...list, +inputValue]
        });
    }

    render() {
        const { inputValue, list } = this.state;

        return (
            <>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor='list'>{'Adder:'}</label>
                        <input
                            id='list'
                            value={inputValue}
                            onChange={(e) => this.handleChange(e)}
                            className='form-control'
                            type='number'
                        />
                    </div>
                </div>
                <button className='btn btn-primary' onClick={this.handleSubmit}>Add</button>
            </form>
            <p>{`Total: ${list.reduce((acc, item) => acc + item, 0)}`}</p>
          </>
        );
    }
}

export default Adder;
