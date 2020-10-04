import React from "react";
import propTypes from 'prop-types';

const FadeIn = ({ time, children }) => {
    return (
        <div
            className="mb-3"
            style={{ animation: `fade-in ${time}` }}>
            { children }
        </div>
    )
}

FadeIn.propTypes = {
    time: propTypes.string,
}

export default FadeIn;