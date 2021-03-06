import React, { Component } from "react";
import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        // super props is a way for us to have access to props within the constructor method
        super(props);

        // state is a way for us to keep track of the changes happening to our component
        this.state = { counter: 0 }

        // all the methods we create have to bind in our constructor in order to work
        this.handleClick = this.handleClick.bind(this);
    }
    // a method we can pass to our event handlers in the render method
    handleClick() {
        // we don't have to but it is good practice to store our state in variables before using them in setState
        let currentCounter = this.state.counter

        // we have to use the setState method to make react rerender our component and show us the change of our state
        // setState will always be the last thing to run in our method
        this.setState({counter: currentCounter + 1});
    }

    render() {
        // we can destructur props inside the render method when using class based components
        const { children } = this.props;

        // we can destructur state inside the render method when using class based components
        const { counter } = this.state;

        return (
            // pass methods into event handlers
            <header onClick={this.handleClick}>
                <h1 className="alert alert-primary">{children}</h1>
                <p>Counter: {counter}</p>
            </header>
        );
    }
}

Header.propTypes = {
    children: PropTypes.string,
}

export default Header;