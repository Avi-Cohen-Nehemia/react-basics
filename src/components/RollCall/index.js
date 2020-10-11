import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RollCall extends Component {
    constructor(props) {
        super(props);

        this.state = { index: 0 }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { names } = this.props;
        const { index } = this.state;
        let currentIndex = index;
        this.setState({index: (currentIndex + 1) % names.length});
    }

    render() {
        const { names } = this.props;
        const { index } = this.state;
        return (
            <>
                <p>{names[index]}</p>
                <button onClick={this.handleClick}>{'Next'}</button>
            </>
        );
    }
}

RollCall.defaultProps = {
    names: ['John', 'Mike', 'Charles'],
}

RollCall.propTypes = {
    names: PropTypes.array,
}

export default RollCall;