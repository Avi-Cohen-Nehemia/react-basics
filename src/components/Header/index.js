import React, { Component } from "react";
import PropTypes from 'prop-types';

class Header extends Component {
    handleClick() {
        console.log("hi")
    }

    render() {
        // we can destructur props inside the render method when using class based components
        const { children } = this.props;
        return (
            <header onClick={this.handleClick}>
                <h1 className="alert alert-primary">{children}</h1>
            </header>
        )
    }
}

Header.propTypes = {
    children: PropTypes.string,
}

export default Header;