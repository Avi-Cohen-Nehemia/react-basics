import React from "react";
import PropTypes from 'prop-types';

const Header = ({ children }) => {
    return (
        <h1 className="alert alert-primary">{ children }</h1>
    )
}

Header.propTypes = {
    children: PropTypes.string,
}

export default Header;