import React, { Component } from "react";
import PropTypes from 'prop-types';

class Paragraph extends Component {
    render() {
        const { children } = this.props;
        return (
            <p>{children}</p>
        );
    }
}

Paragraph.defaultProps = {
    children: "Hello world",
}

Paragraph.propTypes = {
    children: PropTypes.string,
}

export default Paragraph;