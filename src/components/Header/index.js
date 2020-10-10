import React, { Component } from "react";
import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        // super props is a way for us to have access to props within the constructor method
        super(props);
        // state is a way for us to keep track of the changes happening to our component
        this.state = { counter: 0 }
    }
    // a method we can pass to our event handlers in the render method
    handleClick() {
        console.log("hi");
    }

    render() {
        // we can destructur props inside the render method when using class based components
        const { children } = this.props;
        return (
            <header onClick={this.handleClick}>
                <h1 className="alert alert-primary">{children}</h1>
            </header>
        );
    }
}

Header.propTypes = {
    children: PropTypes.string,
}

export default Header;