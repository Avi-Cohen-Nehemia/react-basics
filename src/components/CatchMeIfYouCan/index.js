import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CatchMeIfYouCan extends Component {
    constructor(props) {
        super(props);

        this.state = { buttonPosition: 0 }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { jump } = this.props;
        let currentPosition = this.state.buttonPosition;
        this.setState({buttonPosition: currentPosition + jump});
    }

    render() {
        const { buttonPosition } = this.state;
        return (
            <button
                onClick={this.handleClick}
                style={{
                    position: "relative",
                    top: `${buttonPosition}px`
                }}
            >
                {'Catch Me!'}
            </button>
        );
    }
}

CatchMeIfYouCan.defaultProps = {
    jump: 100,
}

CatchMeIfYouCan.propTypes = {
    jump: PropTypes.number,
}

export default CatchMeIfYouCan;