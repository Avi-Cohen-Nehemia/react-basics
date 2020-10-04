import React from "react";
import propTypes from 'prop-types';

const Paragraph = ({ message }) => {
    return (
        <p>{ message }</p>
    )
}

Paragraph.defaultProps = {
    message: "Hello world",
}

Paragraph.propTypes = {
    message: propTypes.string,
}

export default Paragraph;