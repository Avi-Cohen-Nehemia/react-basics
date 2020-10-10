import React from "react";
import PropTypes from 'prop-types';

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
    time: PropTypes.string,
}

export default FadeIn;