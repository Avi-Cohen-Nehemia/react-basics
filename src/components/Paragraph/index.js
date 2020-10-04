import React from "react";
import propTypes from 'prop-types';

const Paragraph = ({ message }) => {
    return (
        <p>{ message ? message : "Hello world" }</p>
    )
}

Paragraph.propTypes = {
    message: propTypes.string,
}

export default Paragraph;