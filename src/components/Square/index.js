import React, { Component } from "react";
import PropTypes from 'prop-types';

class Square extends Component {
    constructor(props) {
        super(props)
        this.state = { isGreen: true }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let changeColor = this.state.isGreen;
        this.setState({ isGreen: !changeColor });
    }

    render() {
        const { isGreen } = this.state;
        const { color } = this.props;
        return (
            <div
                onClick={this.handleClick}
                style={{ 
                    height: "200px",
                    width: "200px",
                    backgroundColor: isGreen ? 'green' : color
                 }}>
            </div>
        );
    }
}

Square.defaultProps = {
    color: "red",
}

Square.propTypes = {
    color: PropTypes.string,
}

export default Square;