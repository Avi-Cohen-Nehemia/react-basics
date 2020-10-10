import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToggleText extends Component {
    constructor(props) {
        super(props)

        const { initial } = props;

        this.state = { counter: initial };

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        const { max } = this.props;
        let currentCounter = this.state.counter;
        this.setState({ counter: currentCounter < max ? currentCounter : currentCounter + 1 });
    }

    handleDecrement() {
        let currentCounter = this.state.counter;
        this.setState({ counter: currentCounter > 0 ? currentCounter : currentCounter - 1 });
    }

    render() {
        const { counter } = this.state;
        return (
            <>
                <p>{counter}</p>
                <button onClick={this.handleIncrement}>{'+'}</button>
                <button onClick={this.handleDecrement}>{'-'}</button>
            </>
        );
    }
}

ToggleText.defaultProps = {
    initial: 50,
    max: 100,
}

ToggleText.propTypes = {
    initial: PropTypes.number,
    max: PropTypes.number
}

export default ToggleText;