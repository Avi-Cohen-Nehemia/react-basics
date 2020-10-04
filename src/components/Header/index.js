import React from "react";
import propTypes from 'prop-types';

const Header = ({ children }) => {
    return (
        <h1 className="alert alert-primary">{ children }</h1>
    )
}

Header.propTypes = {
    children: propTypes.string,
}

export default Header;