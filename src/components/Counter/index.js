import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
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
        if (currentCounter < max) {
            this.setState({ counter: currentCounter + 1 });
        }
    }

    handleDecrement() {
        let currentCounter = this.state.counter;
        if (currentCounter > 0) {
            this.setState({ counter: currentCounter - 1 });
        }
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

Counter.defaultProps = {
    initial: 50,
    max: 100,
}

Counter.propTypes = {
    initial: PropTypes.number,
    max: PropTypes.number
}

export default Counter;