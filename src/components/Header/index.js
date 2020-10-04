import React from "react";
import propTypes from 'prop-types';

const Header = ({ text }) => {
    return (
        <h1 className="alert alert-primary">{ text }</h1>
    )
}

Header.propTypes = {
    text: propTypes.string,
}

export default Header;