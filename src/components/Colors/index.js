import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Colors extends Component {
    constructor(props) {
        super(props);

        this.state = { index: 0 }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { colors } = this.props;
        const { index } = this.state;
        let currentIndex = index;
        this.setState({index: (currentIndex + 1) % colors.length});
    }

    render() {
        const { colors } = this.props;
        const { index } = this.state;
        return (
            <div
                onClick={this.handleClick}
                style={{
                    height: '200px',
                    width: '200px',
                    backgroundColor: colors[index]
                }}
            >
            </div>
        );
    }
}

Colors.defaultProps = {
    names: ['blue', 'green', 'yellow'],
}

Colors.propTypes = {
    names: PropTypes.array,
}

export default Colors;