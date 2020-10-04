import React from "react";
import propTypes from 'prop-types';

const People = ({ names }) => (
    names ? (
    <ul className="list-group">
        { names.map((name, index) => (
            <li className="list-group-item" key={ index }>{ name }</li>
        ))}
    </ul>
    ) : <p>Nothing to see here</p>
)

People.propTypes = {
    names: propTypes.array,
}

export default People;