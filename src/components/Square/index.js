import React from "react";
import propTypes from 'prop-types';

const Square = ({ color }) => {
    return (
        <div
            style={{ 
                height: "200px",
                width: "200px",
                backgroundColor: color
             }}>
        </div>
    )
}

Square.defaultProps = {
    color: "red",
}

Square.propTypes = {
    color: propTypes.string,
}

export default Square;