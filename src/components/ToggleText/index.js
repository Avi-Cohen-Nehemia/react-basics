import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToggleText extends Component {
    constructor(props) {
        super(props)
        this.state = { initialText: true }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let toggleText = this.state.initialText;
        this.setState({ initialText: !toggleText });
    }

    render() {
        const { initialText } = this.state;
        const { initial, alternate } = this.props;
        return (
            <>
                <p>{initialText ? initial : alternate}</p>
                <button onClick={this.handleClick}>{'Toggle'}</button>
            </>
        );
    }
}

ToggleText.defaultProps = {
    initial: 'Hello',
    alternate: 'World',
}

ToggleText.propTypes = {
    initial: PropTypes.string,
    alternate: PropTypes.string
}

export default ToggleText;