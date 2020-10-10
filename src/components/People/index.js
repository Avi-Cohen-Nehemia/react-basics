import React from "react";
import PropTypes from 'prop-types';

const People = ({ names }) => {
    return (
        names ? (
        <ul className="list-group">
            { names.map((name, index) => (
                <li className="list-group-item" key={ index }>{ name }</li>
            ))}
        </ul>
        ) : <p>Nothing to see here</p>
    )
}

People.propTypes = {
    names: PropTypes.array,
}

export default People;