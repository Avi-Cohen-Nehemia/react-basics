import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Transform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: 0,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.currentTarget.value;
        this.setState({inputValue: value});
    }

    render() {
        const { inputValue } = this.state;
        const { transform } = this.props;

        return (
            <>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor='list'>{'Transform A Number:'}</label>
                        <input
                            id='list'
                            value={inputValue}
                            onChange={(e) => this.handleChange(e)}
                            className='form-control'
                            type='number'
                        />
                    </div>
                </div>
            </form>
            <p>{`Result: ${transform(+inputValue)}`}</p>
          </>
        );
    }
}

Transform.propTypes = {
    transform: PropTypes.func.isRequired,
}

export default Transform;
