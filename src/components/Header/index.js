import React from "react";
import PropTypes from 'prop-types';

const Header = ({ children }) => {
    return (
        <header onClick={() => console.log("hi")}>
            <h1 className="alert alert-primary">{ children }</h1>
        </header>
    )
}

Header.propTypes = {
    children: PropTypes.string,
}

export default Header;