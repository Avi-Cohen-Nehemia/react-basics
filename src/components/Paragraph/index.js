import React from "react";
import PropTypes from 'prop-types';

const Paragraph = ({ children }) => {
    return (
        <p>{ children }</p>
    )
}

Paragraph.defaultProps = {
    children: "Hello world",
}

Paragraph.propTypes = {
    children: PropTypes.string,
}

export default Paragraph;