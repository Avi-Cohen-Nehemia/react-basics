import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StepCounter extends Component {
    constructor(props) {
        super(props)

        this.state = { count: 0 };

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        const { max, step } = this.props;
        let currentCount = this.state.count;
        if (currentCount < max) {
            this.setState({ count: currentCount + step });
        }  
    }

    handleDecrement() {
        const { step } = this.props;
        let currentCount = this.state.count;
        if (currentCount > 0) {
            this.setState({ count: currentCount - step });
        } 
    }

    render() {
        const { count } = this.state;
        return (
            <>
                <p>{count}</p>
                <button onClick={this.handleIncrement}>{'+'}</button>
                <button onClick={this.handleDecrement}>{'-'}</button>
            </>
        );
    }
}

StepCounter.defaultProps = {
    step: 5,
    max: 100,
}

StepCounter.propTypes = {
    step: PropTypes.number,
    max: PropTypes.number
}

export default StepCounter;