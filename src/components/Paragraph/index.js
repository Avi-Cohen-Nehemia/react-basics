import React from "react";
import propTypes from 'prop-types';

const Paragraph = ({ children }) => {
    return (
        <p>{ children }</p>
    )
}

Paragraph.defaultProps = {
    children: "Hello world",
}

Paragraph.propTypes = {
    children: propTypes.string,
}

export default Paragraph;